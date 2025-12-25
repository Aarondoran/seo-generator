const output = document.getElementById("output")
const generateBtn = document.getElementById("generate")
const copyBtn = document.getElementById("copy")

generateBtn.onclick = () => {
  const fields = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    url: document.getElementById("url"),
    description: document.getElementById("description"),
    keywords: document.getElementById("keywords"),
    author: document.getElementById("author"),
    banner: document.getElementById("banner"),
    pfp: document.getElementById("pfp")
  }

  for (const key in fields) {
    if (!fields[key].value.trim()) {
      fields[key].focus()
      return
    }
  }

  output.textContent = 
`<title>${fields.name.value} | ${fields.title.value}</title>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&display=swap" rel="stylesheet" />
<link rel="canonical" href="${fields.url.value}">

<meta name="title" content="${fields.name.value} | ${fields.title.value}">
<meta name="description" content="${fields.description.value}">
<meta name="keywords" content="${fields.keywords.value}">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="language" content="English">
<meta name="revisit-after" content="1 days">
<meta name="author" content="${fields.author.value}">

<meta property="og:type" content="website" />
<meta property="og:url" content="${fields.url.value}" />
<meta property="og:title" content="${fields.name.value} | ${fields.title.value}" />
<meta property="og:description" content="${fields.description.value}" />
<meta property="og:image" content="${fields.banner.value}" />
<meta property="og:logo" content="${fields.pfp.value}" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${fields.url.value}" />
<meta property="twitter:title" content="${fields.name.value} | ${fields.title.value}" />
<meta property="twitter:description" content="${fields.description.value}" />
<meta property="twitter:image" content="${fields.banner.value}" />`
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
