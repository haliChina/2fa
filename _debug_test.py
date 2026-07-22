"""Reproduce the user's issue: localStorage data exists but accounts don't display."""
import json
from playwright.sync_api import sync_playwright

URL = "http://localhost:8765/"

# User's exact data format (secrets replaced with valid Base32 placeholders)
USER_DATA = [
    {"id":"mqvo24htbb9njyau8lq","name":"Github","secret":"JBSWY3DPEHPK3PXP","issuer":""},
    {"id":"mqvo2eeayiw0jp0dw2o","name":"ebonnyquirroz758@gmail.com","secret":"JBSWY3DPEHPK3PXP","issuer":""},
    {"id":"mqvo2mplesgigx6jiqd","name":"shop","secret":"JBSWY3DPEHPK3PXP","issuer":""},
    {"id":"mqyuo7dfqq2wkso1kn","name":"郭宣言","secret":"JBSWY3DPEHPK3PXP","issuer":""},
    {"id":"mrdo00nzom7zrvrtyk","name":"Spacemail","secret":"JBSWY3DPEHPK3PXP","issuer":""},
    {"id":"mrfn6zc9aorb9oyhxy","name":"OpenAI","secret":"JBSWY3DPEHPK3PXP","issuer":""},
    {"id":"mrs6unht39grak161ar","name":"KristalCapa.s@gmail.com----过滤----过滤----过滤","secret":"JBSWY3DPEHPK3PXP","issuer":""},
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 480, "height": 900})
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("console", lambda m: print(f"[CONSOLE {m.type}] {m.text}") if m.type == "error" else None)

    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(500)

    # Inject the user's localStorage data
    page.evaluate(f"localStorage.setItem('2fa_accounts', '{json.dumps(json.dumps(USER_DATA))}')")
    # Verify it's set
    ls = page.evaluate("localStorage.getItem('2fa_accounts')")
    print(f"localStorage set: {ls[:80]}...")

    # Reload to trigger loadAccounts()
    page.reload(wait_until="networkidle")
    page.wait_for_timeout(1000)

    # Check what's visible
    label_display = page.evaluate("document.getElementById('accountsLabel').style.display")
    items_count = page.locator(".account-item").count()
    list_innerhtml_length = page.evaluate("document.getElementById('accountsList').innerHTML.length")
    list_inner_text = page.evaluate("document.getElementById('accountsList').innerText")

    print(f"\n=== RESULTS ===")
    print(f"accountsLabel display: {label_display!r}")
    print(f".account-item count: {items_count}")
    print(f"accountsList innerHTML length: {list_innerhtml_length}")
    print(f"accountsList innerText: {list_innerText[:200]!r}")
    print(f"Page errors: {errors}")

    # Also dump the actual innerHTML to see structure
    inner = page.evaluate("document.getElementById('accountsList').innerHTML")
    print(f"\n=== FIRST 500 chars of innerHTML ===")
    print(inner[:500])

    page.screenshot(path="/workspace/_debug.png", full_page=True)
    print("\nScreenshot: /workspace/_debug.png")

    browser.close()
