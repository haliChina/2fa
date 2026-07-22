
// ── Platform brand icon registry ──
const PLATFORMS = [
  { keys:['google','gmail'], bg:'#fff', svg:`<svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>` },
  { keys:['github'], bg:'#fff', svg:`<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717"/></svg>` },
  { keys:['apple','icloud'], bg:'#000', svg:`<svg viewBox="0 0 24 24"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="#fff"/></svg>` },
  { keys:['microsoft','outlook','hotmail','office','azure'], bg:'#fff', svg:`<svg viewBox="0 0 23 23"><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>` },
  { keys:['twitter','x.com'], bg:'#000', svg:`<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#fff"/></svg>` },
  { keys:['facebook','instagram','meta','whatsapp'], bg:'#1877F2', svg:`<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#fff"/></svg>` },
  { keys:['amazon','aws'], bg:'#232F3E', svg:`<svg viewBox="0 0 24 24"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.748.07-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.578-1.124-.816-1.776-.816-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.547.582l-3.065-.334c-.259-.056-.548-.266-.472-.66C5.962 2.458 8.96 1.5 11.7 1.5c1.396 0 3.22.371 4.32 1.428 1.396 1.303 1.262 3.041 1.262 4.934v4.47c0 1.344.557 1.934 1.082 2.659.184.258.223.565-.01.756l-1.21 1.048zm2.99 2.556C17.525 22.35 14.58 24 11.219 24 6.919 24 3.06 22.401.507 19.773c-.23-.228-.026-.543.264-.365C3.261 21.072 6.565 22.003 9.985 22.003c2.338 0 5.261-.485 7.793-1.501.363-.152.702.255.356.849zm1.016-2.871c-.311-.401-2.057-.19-2.843-.096-.239.029-.275-.18-.06-.333 1.393-.979 3.677-.697 3.944-.369.268.329-.073 2.612-1.377 3.702-.201.168-.393.079-.303-.143.294-.734.952-2.38.639-2.761z" fill="#FF9900"/></svg>` },
  { keys:['discord'], bg:'#5865F2', svg:`<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#fff"/></svg>` },
  { keys:['telegram'], bg:'#2CA5E0', svg:`<svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#fff"/></svg>` },
  { keys:['dropbox'], bg:'#0061FF', svg:`<svg viewBox="0 0 24 24"><path d="M6 2L0 6l6 4-6 4 6 4 6-4-6-4 6-4zm12 0l-6 4 6 4-6 4 6 4 6-4-6-4 6-4zM6 17l6 4 6-4-6-4z" fill="#fff"/></svg>` },
  { keys:['slack'], bg:'#fff', svg:`<svg viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/></svg>` },
  { keys:['linkedin'], bg:'#0A66C2', svg:`<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#fff"/></svg>` },
  { keys:['steam'], bg:'#1b2838', svg:`<svg viewBox="0 0 24 24"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.452-.397.957-1.497 1.41-2.454 1.015H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" fill="#fff"/></svg>` },
  { keys:['netflix'], bg:'#141414', svg:`<svg viewBox="0 0 24 24"><path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z" fill="#E50914"/></svg>` },
  { keys:['twitch'], bg:'#9146FF', svg:`<svg viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" fill="#fff"/></svg>` },
  { keys:['paypal'], bg:'#003087', svg:`<svg viewBox="0 0 24 24"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.132-8.558 6.132H9.982l-1.35 8.539h2.304l.938-5.944h2.123c4.793 0 7.664-2.524 8.576-7.104.13-.654.176-1.27.153-1.82l-.504.484z" fill="#fff"/></svg>` },
  { keys:['binance'], bg:'#181a20', svg:`<svg viewBox="0 0 24 24"><path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6355-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.567 12l2.6936-2.7164zm-9.272 0L14.705 12l-2.7164 2.7154L9.2723 12l2.7154-2.7164zm-9.2722 0L5.4328 12 2.7164 14.7164 0 12l2.7164-2.7164zM11.9885.0115l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6595-2.7174-2.7154 7.353-7.353z" fill="#F3BA2F"/></svg>` },
  { keys:['coinbase'], bg:'#0052FF', svg:`<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 5.455c3.614 0 6.545 2.93 6.545 6.545 0 3.614-2.93 6.545-6.545 6.545A6.545 6.545 0 0 1 5.455 12c0-3.614 2.93-6.545 6.545-6.545zm0 3.272a3.273 3.273 0 1 0 0 6.546 3.273 3.273 0 0 0 0-6.546z" fill="#fff"/></svg>` },
  { keys:['cloudflare'], bg:'#F38020', svg:`<svg viewBox="0 0 24 24"><path d="M16.572 9.33a4.34 4.34 0 0 0-.16-.44C16.003 7.297 14.32 6 12.28 6c-1.617 0-3.056.82-3.872 2.067a2.627 2.627 0 0 0-1.293-.337 2.65 2.65 0 0 0-2.65 2.648c0 .088.005.175.014.26A3.53 3.53 0 0 0 1.5 13.795C1.5 15.79 3.11 17.4 5.105 17.4H16.56c1.76 0 3.187-1.427 3.187-3.188a3.19 3.19 0 0 0-3.175-3.882z" fill="#fff"/></svg>` },
  { keys:['notion'], bg:'#fff', svg:`<svg viewBox="0 0 24 24"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.264-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000"/></svg>` },
  { keys:['proton','protonmail'], bg:'#6D4AFF', svg:`<svg viewBox="0 0 24 24"><path d="M23.977 7.1c-.042-1.334-.263-2.219-.557-3.009a6.126 6.126 0 0 0-1.441-2.211 6.133 6.133 0 0 0-2.21-1.441C18.978.146 18.093-.076 16.759.023L1.144.013 1.12 13.999c.002.718.004 1.319.169 1.974.164.657.453 1.3.871 1.847a5.024 5.024 0 0 0 3.951 1.929l6.437.009V14.31l-3.83-.005V9.833l7.67.01c1.017 0 1.84.823 1.84 1.84v8.086h3.832V11.68a5.564 5.564 0 0 0-.558-2.408 5.557 5.557 0 0 0-1.499-1.913 7.81 7.81 0 0 0 1.449-.677 6.119 6.119 0 0 0 2.526-3.6c.064-.274.1-.556.099-.84v.858z" fill="#fff"/></svg>` },
  { keys:['chatgpt','openai','gpt'], bg:'#10a37f', svg:`<svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>` }
];

const AVATAR_COLORS = [
  'linear-gradient(135deg,#38bdf8,#818cf8)',
  'linear-gradient(135deg,#4ade80,#22d3ee)',
  'linear-gradient(135deg,#fb923c,#f43f5e)',
  'linear-gradient(135deg,#a78bfa,#ec4899)',
  'linear-gradient(135deg,#facc15,#f97316)',
  'linear-gradient(135deg,#2dd4bf,#6366f1)',
];

function getAvatarColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffffffff;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
}

function detectPlatform(name, issuer) {
  const s = ((name || '') + ' ' + (issuer || '')).toLowerCase();
  return PLATFORMS.find(p => p.keys.some(k => s.includes(k))) || null;
}

function buildAvatarHtml(name, issuer, size) {
  const p = detectPlatform(name, issuer);
  if (p) {
    return `<div class="avatar brand avatar-md" style="width:${size}px;height:${size}px;background:${p.bg};border-radius:8px;padding:${size===32?5:4}px;">${p.svg}</div>`;
  }
  return `<div class="avatar letter avatar-md" style="width:${size}px;height:${size}px;background:${getAvatarColor(name||'')};border-radius:8px;">${getInitials(name||'UA')}</div>`;
}

function setCodeAvatar(name, issuer) {
  const el = document.getElementById('codeAvatar');
  const p  = detectPlatform(name, issuer);
  if (p) {
    el.className = 'avatar brand avatar-sm';
    el.style.background = p.bg;
    el.style.borderRadius = '7px';
    el.style.padding = '4px';
    el.innerHTML = p.svg;
  } else {
    el.className = 'avatar letter avatar-sm';
    el.style.background = getAvatarColor(name || '');
    el.style.borderRadius = '7px';
    el.style.padding = '';
    el.textContent = getInitials(name || 'UA');
  }
}

// ── Cookie backup utilities (chunked, base64 JSON) ──
// Cookies max ~4KB each. We chunk to stay safe under 3KB payload per cookie.
const COOKIE_PREFIX = '2fa_backup';
const CHUNK_SIZE = 3000; // chars of base64 per cookie

function encodeAccountsToCookie(accounts) {
  try {
    const json = JSON.stringify(accounts);
    // UTF-8 safe base64
    const b64 = btoa(unescape(encodeURIComponent(json)));
    const chunks = [];
    for (let i = 0; i < b64.length; i += CHUNK_SIZE) {
      chunks.push(b64.slice(i, i + CHUNK_SIZE));
    }
    const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
    const cookieAttrs = [
      COOKIE_PREFIX + '_count=' + chunks.length,
      'path=/',
      'max-age=31536000',
      'samesite=lax',
      isSecure ? 'secure' : ''
    ].filter(Boolean).join('; ');
    document.cookie = cookieAttrs;
    chunks.forEach((chunk, idx) => {
      const attrs = [
        COOKIE_PREFIX + '_' + idx + '=' + chunk,
        'path=/',
        'max-age=31536000',
        'samesite=lax',
        isSecure ? 'secure' : ''
      ].filter(Boolean).join('; ');
      document.cookie = attrs;
    });
    return true;
  } catch (e) {
    console.warn('Cookie backup write failed:', e);
    return false;
  }
}

function readAccountsFromCookie() {
  try {
    const cookies = document.cookie ? document.cookie.split('; ') : [];
    const map = {};
    let count = 0;
    cookies.forEach(c => {
      const eq = c.indexOf('=');
      const k = c.slice(0, eq);
      const v = c.slice(eq + 1);
      if (k === COOKIE_PREFIX + '_count') count = parseInt(v, 10) || 0;
      else if (k.startsWith(COOKIE_PREFIX + '_')) {
        const idx = parseInt(k.slice(COOKIE_PREFIX.length + 1), 10);
        if (!isNaN(idx)) map[idx] = v;
      }
    });
    if (!count || Object.keys(map).length === 0) return null;
    let b64 = '';
    for (let i = 0; i < count; i++) {
      if (map[i] === undefined) return null; // missing chunk
      b64 += map[i];
    }
    const json = decodeURIComponent(escape(atob(b64)));
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : null;
  } catch (e) {
    console.warn('Cookie backup read failed:', e);
    return null;
  }
}

function clearCookieBackup() {
  const cookies = document.cookie ? document.cookie.split('; ') : [];
  const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
  cookies.forEach(c => {
    const eq = c.indexOf('=');
    const k = c.slice(0, eq);
    if (k === COOKIE_PREFIX + '_count' || k.startsWith(COOKIE_PREFIX + '_')) {
      document.cookie = k + '=; path=/; max-age=0; samesite=lax' + (isSecure ? '; secure' : '');
    }
  });
}

// ── Main ──
document.addEventListener('DOMContentLoaded', () => {
  const codeCard           = document.getElementById('codeCard');
  const codeGroup1         = document.getElementById('codeGroup1');
  const codeGroup2         = document.getElementById('codeGroup2');
  const timerBox           = document.getElementById('timerBox');
  const progressBar        = document.getElementById('progressBar');
  const ringProg           = document.getElementById('ringProg');
  const ringText           = document.getElementById('ringText');
  const secretInput        = document.getElementById('secret');
  const accountNameInput   = document.getElementById('accountName');
  const clearBtn           = document.getElementById('clearBtn');
  const codeArea           = document.getElementById('codeArea');
  const saveBtn            = document.getElementById('saveBtn');
  const scanBtn            = document.getElementById('scanBtn');
  const accountsList       = document.getElementById('accountsList');
  const accountsLabel      = document.getElementById('accountsLabel');
  const fileInput          = document.getElementById('fileInput');
  const currentAccountName = document.getElementById('currentAccountName');
  const toastEl            = document.getElementById('toast');
  const themeBtn           = document.getElementById('themeBtn');
  const themeIcon          = document.getElementById('themeIcon');
  const installBtn         = document.getElementById('installBtn');

  let accounts      = [];
  let currentSecret = null;
  let currentLabel  = '';
  let currentIssuer = '';
  let lastCode      = '';
  let jsQrLoader     = null;
  let deferredPrompt = null;

  // CRITICAL: keep this exact key — existing user data lives here
  const STORAGE_KEY   = '2fa_accounts';
  const CIRCUMFERENCE = 2 * Math.PI * 14;

  // ── Theme handling ──
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark'
        ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke-linecap="round"/>'
        : '<path d="M12 3a6 6 0 100 12 9 9 0 010-12z" stroke-linejoin="round"/>';
    }
    try { localStorage.setItem('2fa_theme', theme); } catch {}
  }

  function initTheme() {
    let theme;
    try { theme = localStorage.getItem('2fa_theme'); } catch {}
    if (!theme) theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(theme);
  }
  initTheme();

  themeBtn?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });

  // ── Storage with cookie backup ──
  function loadAccounts() {
    let loaded = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) loaded = parsed;
      }
    } catch { /* corrupted localStorage, fall through to cookie */ }

    if (!loaded || loaded.length === 0) {
      // Fallback: try cookie backup
      const fromCookie = readAccountsFromCookie();
      if (fromCookie && fromCookie.length > 0) {
        loaded = fromCookie;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded)); } catch {}
        showToast('已从 Cookie 备份恢复 ' + loaded.length + ' 个账户', 'success');
      }
    }
    accounts = loaded || [];
    renderAccounts();
  }

  function saveAccountsToStorage() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts)); } catch {}
    // Double-write to cookies for resilience
    encodeAccountsToCookie(accounts);
  }

  function addAccount(name, secret, issuer = '') {
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const account = { id, name: name || '未命名账户', secret: secret.toUpperCase().replace(/\s/g, ''), issuer };
    accounts.push(account);
    saveAccountsToStorage();
    renderAccounts();
    return account;
  }

  function deleteAccount(id) {
    accounts = accounts.filter(a => a.id !== id);
    saveAccountsToStorage();
    renderAccounts();
    if (currentSecret && !accounts.find(a => a.secret === currentSecret)) {
      currentSecret = null;
      codeArea.classList.add('hidden');
    }
    showToast('账户已删除');
  }

  function selectAccount(account) {
    currentSecret = account.secret;
    currentIssuer = account.issuer || '';
    currentLabel  = account.issuer ? `${account.issuer} · ${account.name}` : account.name;
    secretInput.value      = account.secret;
    accountNameInput.value = account.name;
    currentAccountName.textContent = currentLabel;
    setCodeAvatar(account.name, account.issuer);
    codeArea.classList.remove('hidden');
    renderAccounts();
    update();
  }

  function renderAccounts() {
    if (!accounts.length) {
      accountsList.innerHTML = '';
      accountsLabel.style.display = 'none';
      return;
    }
    accountsLabel.style.display = '';
    accountsList.innerHTML = accounts.map(acc => `
      <div class="account-item ${currentSecret === acc.secret ? 'active' : ''}" data-id="${acc.id}" role="button" tabindex="0" aria-label="选择账户 ${escapeHtml(acc.name)}">
        ${buildAvatarHtml(acc.name, acc.issuer, 32)}
        <div class="account-info">
          <div class="account-name">${escapeHtml(acc.name)}</div>
          <div class="account-issuer">${escapeHtml(acc.issuer || '手动添加')}</div>
        </div>
        <div class="account-active-dot" aria-hidden="true"></div>
        <button class="account-delete" data-id="${acc.id}" title="删除" aria-label="删除账户 ${escapeHtml(acc.name)}" type="button">
          <svg viewBox="0 0 501.333 501.333" fill="currentColor" aria-hidden="true">
            <path d="M425.6,71.467h-78.933V21.333C346.667,9.6,337.067,0,325.333,0H177.067c-11.733,0-21.333,9.6-21.333,21.333v50.133h-80C64,71.467,54.4,81.067,54.4,92.8v84.267C54.4,188.8,64,198.4,75.733,198.4h14.933l28.8,283.733c1.067,10.667,9.6,19.2,20.267,19.2H361.6c10.667,0,20.267-8.533,22.4-19.2L411.733,198.4H425.6c11.733,0,20.267-9.6,21.333-21.333V92.8C446.933,81.067,437.333,71.467,425.6,71.467zM197.333,41.6H304v29.867H197.333V41.6zM343.467,459.733H158.934L132.267,198.4h236.8L343.467,459.733zM405.333,155.733H97.067v-42.667h308.267V155.733z"/>
          </svg>
        </button>
      </div>
    `).join('');
  }

  let toastTimer;
  function showToast(msg, type = '') {
    clearTimeout(toastTimer);
    toastEl.textContent = msg;
    toastEl.className = 'toast show' + (type ? ' ' + type : '');
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2500);
  }

  function loadJsQrLib() {
    if (window.jsQR) return Promise.resolve(window.jsQR);
    if (jsQrLoader) return jsQrLoader;
    jsQrLoader = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      // Same-origin local file — keeps the zero-third-party-request promise
      script.src = '/jsQR.min.js';
      script.defer = true;
      script.onload = () => resolve(window.jsQR);
      script.onerror = () => reject(new Error('jsQR load failed'));
      document.head.appendChild(script);
    });
    return jsQrLoader;
  }

  function escapeHtml(t) {
    const d = document.createElement('div'); d.textContent = t; return d.innerHTML;
  }

  function renderCode(code, invalid = false) {
    codeGroup1.innerHTML = '';
    codeGroup2.innerHTML = '';
    if (invalid) {
      const s = document.createElement('span');
      s.className = 'code-digit invalid';
      s.textContent = code;
      codeGroup1.appendChild(s);
    } else {
      [...code].forEach((ch, i) => {
        const el = document.createElement('span');
        el.className = 'code-digit' + (ch !== (lastCode[i] || '') ? ' digit-flip' : '');
        el.textContent = ch;
        (i < 3 ? codeGroup1 : codeGroup2).appendChild(el);
      });
    }
    lastCode = code;
  }

  function copyCode() {
    const digits = [...codeGroup1.querySelectorAll('.code-digit'), ...codeGroup2.querySelectorAll('.code-digit')];
    if (!digits.length || digits[0].classList.contains('invalid')) return;
    const code = digits.map(d => d.textContent).join('');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code)
        .then(() => showToast('已复制到剪贴板', 'success'))
        .catch(() => fallbackCopy(code));
    } else {
      fallbackCopy(code);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('已复制到剪贴板', 'success');
    } catch {
      showToast('复制失败，请手动选择', 'error');
    }
    document.body.removeChild(ta);
  }

  codeCard.addEventListener('click', copyCode);
  codeCard.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyCode(); }
  });

  // ── Delegated account list events ──
  accountsList.addEventListener('click', e => {
    const delBtn = e.target.closest('.account-delete');
    if (delBtn) { e.stopPropagation(); deleteAccount(delBtn.dataset.id); return; }
    const item = e.target.closest('.account-item');
    if (item) { const acc = accounts.find(a => a.id === item.dataset.id); if (acc) selectAccount(acc); }
  });
  // Keyboard activation for .account-item (div role="button")
  accountsList.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const item = e.target.closest('.account-item');
    if (!item) return;
    if (e.target.closest('.account-delete')) return; // delete button handles itself
    e.preventDefault();
    const acc = accounts.find(a => a.id === item.dataset.id);
    if (acc) selectAccount(acc);
  });

  clearBtn.addEventListener('click', () => {
    secretInput.value = accountNameInput.value = '';
    currentSecret = currentLabel = currentIssuer = '';
    codeArea.classList.add('hidden');
    renderAccounts();
    secretInput.focus();
  });

  saveBtn.addEventListener('click', () => {
    const secret = secretInput.value.trim();
    const name   = accountNameInput.value.trim();
    if (!secret) return showToast('请输入密钥', 'error');
    if (!isValidBase32(secret)) return showToast('密钥格式无效', 'error');
    selectAccount(addAccount(name, secret));
    showToast('账户已保存（localStorage + Cookie 双重备份）', 'success');
  });

  scanBtn.addEventListener('click', async () => {
    try {
      await loadJsQrLib();
      fileInput.click();
    } catch {
      showToast('二维码组件加载失败，请稍后重试', 'error');
    }
  });
  fileInput.addEventListener('change', e => { if (e.target.files[0]) handleFile(e.target.files[0]); });

  async function handleFile(file) {
    if (!file.type.startsWith('image/')) return showToast('请选择图片文件', 'error');
    try {
      await loadJsQrLib();
    } catch {
      return showToast('二维码组件加载失败，请稍后重试', 'error');
    }
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = img.width; c.height = img.height;
        const ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const d = ctx.getImageData(0, 0, c.width, c.height);
        const code = jsQR(d.data, d.width, d.height);
        if (code) parseOtpAuth(code.data); else showToast('未检测到二维码', 'error');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
  }

  function parseOtpAuth(url) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== 'otpauth:') return showToast('不是有效的 OTP 链接', 'error');
      const secret = parsed.searchParams.get('secret');
      const issuer = parsed.searchParams.get('issuer') || '';
      let label    = decodeURIComponent(parsed.pathname.substring(1));
      let name     = label.includes(':') ? label.split(':')[1].trim() : label;
      if (!secret) return showToast('二维码中未找到密钥', 'error');
      if (!isValidBase32(secret)) return showToast('密钥格式无效', 'error');
      secretInput.value      = secret.toUpperCase().replace(/\s/g, '');
      accountNameInput.value = name || issuer || '';
      currentSecret = secretInput.value;
      currentIssuer = issuer;
      currentLabel  = accountNameInput.value || '临时使用';
      currentAccountName.textContent = currentLabel;
      setCodeAvatar(currentLabel, issuer);
      codeArea.classList.remove('hidden');
      showToast('二维码识别成功', 'success');
      update();
    } catch { showToast('解析二维码失败', 'error'); }
  }

  secretInput.addEventListener('input', () => {
    const secret = secretInput.value.trim();
    clearBtn.classList.toggle('visible', !!secret);
    if (secret && isValidBase32(secret)) {
      currentSecret = secret;
      currentIssuer = '';
      currentLabel  = accountNameInput.value.trim() || '临时使用';
      currentAccountName.textContent = currentLabel;
      setCodeAvatar(currentLabel, '');
      codeArea.classList.remove('hidden');
    }
    update();
  });

  accountNameInput.addEventListener('input', () => {
    if (!currentSecret) return;
    currentLabel = accountNameInput.value.trim() || '临时使用';
    currentAccountName.textContent = currentLabel;
    setCodeAvatar(currentLabel, currentIssuer);
  });

  function isValidBase32(s) {
    const c = s.toUpperCase().replace(/\s/g, '');
    return c.length > 0 && /^[A-Z2-7]+=*$/.test(c);
  }

  // Pre-built O(1) Base32 decode table (A-Z = 0-25, 2-7 = 26-31)
  const B32_TABLE = Object.fromEntries(
    [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'].map((c, i) => [c, i])
  );

  function base32ToBytes(b) {
    b = b.toUpperCase().replace(/\s/g, '').replace(/=+$/, '');
    let bits = '', bytes = [];
    for (let i = 0; i < b.length; i++) {
      const v = B32_TABLE[b[i]];
      if (v !== undefined) bits += v.toString(2).padStart(5, '0');
    }
    for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.slice(i, i + 8), 2));
    return new Uint8Array(bytes);
  }

  async function generateTOTP(secret, time = Date.now(), period = 30) {
    const key = base32ToBytes(secret);
    if (!key.length) return '000000';
    const counter = Math.floor(time / 1000 / period);
    const buf = new ArrayBuffer(8);
    new DataView(buf).setBigUint64(0, BigInt(counter));
    const k = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
    const h = new Uint8Array(await crypto.subtle.sign('HMAC', k, buf));
    const o = h[h.length - 1] & 0xf;
    const n = ((h[o]&0x7f)<<24)|((h[o+1]&0xff)<<16)|((h[o+2]&0xff)<<8)|(h[o+3]&0xff);
    return (n % 1000000).toString().padStart(6, '0');
  }

  async function update() {
    const secret   = secretInput.value.trim();
    const now      = Date.now();
    const second   = Math.floor(now / 1000) % 30;
    const timeLeft = 30 - second;
    const urgent   = timeLeft <= 5;

    if (!secret) {
      clearBtn.classList.remove('visible');
      if (!currentSecret) codeArea.classList.add('hidden');
      return;
    }
    clearBtn.classList.add('visible');

    const offset = CIRCUMFERENCE * (1 - timeLeft / 30);
    ringProg.style.strokeDashoffset = offset;
    ringProg.classList.toggle('urgent', urgent);
    ringText.textContent = timeLeft;
    progressBar.style.width = `${(timeLeft / 30) * 100}%`;
    progressBar.classList.toggle('urgent', urgent);
    timerBox.textContent = `${timeLeft} 秒后刷新`;

    if (!isValidBase32(secret)) {
      renderCode('无效密钥', true);
      timerBox.textContent = '请检查 Base32 格式';
      return;
    }
    try {
      renderCode(await generateTOTP(secret, now), false);
    } catch {
      renderCode('生成失败', true);
      timerBox.textContent = '计算错误';
    }
  }

  // ── PWA install prompt capture ──
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.hidden = false;
  });
  installBtn?.addEventListener('click', async () => {
    if (!deferredPrompt) {
      showToast('当前浏览器未弹出安装入口，可改用 Chrome/Edge，或通过浏览器菜单「添加到主屏幕 / 安装应用」手动安装', 'error');
      return;
    }
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') showToast('已安装，可离线使用', 'success');
      else showToast('已取消安装', '');
    } catch (err) {
      console.warn('install prompt failed:', err);
      showToast('安装提示失败，请通过浏览器菜单手动安装', 'error');
    }
    deferredPrompt = null;
    installBtn.hidden = true;
  });
  window.addEventListener('appinstalled', () => { if (installBtn) installBtn.hidden = true; });

  // ── Service worker registration ──
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.warn('SW registration failed:', err);
      });
    });
  }

  loadAccounts();
  setInterval(update, 1000);
  update();
});
