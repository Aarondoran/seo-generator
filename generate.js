const output = document.getElementById("output")
const generateBtn = document.getElementById("generate")
const copyBtn = document.getElementById("copy")

generateBtn.onclick = () => {
  const fields = [...document.querySelectorAll("input, textarea")]
  if (!fields.every(f => f.value.trim())) return

  const name = document.getElementById("name").value
  const title = document.getElementById("title").value
  const url = document.getElementById("url").value
  const description = document.getElementById("description").value
  const keywords = document.getElementById("keywords").value
  const author = document.getElementById("author").value
  const banner = document.getElementById("banner").value
  const pfp = document.getElementById("pfp").value

  output.textContent =
`<title>${name} | ${title}</title>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap" rel="stylesheet" />
<link rel="canonical" href="${url}">

<meta name="title" content="${name} | ${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="language" content="English">
<meta name="revisit-after" content="1 days">
<meta name="author" content="${author}">

<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${name} | ${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${banner}" />
<meta property="og:logo" content="${pfp}" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${url}" />
<meta property="twitter:title" content="${name} | ${title}" />
<meta property="twitter:description" content="${description}" />
<meta property="twitter:image" content="${banner}" />`
}

copyBtn.onclick = async () => {
  if (!output.textContent) return
  await navigator.clipboard.writeText(output.textContent)
  copyBtn.classList.add("copied")
  copyBtn.textContent = "Copied"
  setTimeout(() => {
    copyBtn.classList.remove("copied")
    copyBtn.textContent = "Copy"
  }, 1500)
}
