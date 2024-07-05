const items=[128512, 128521, 128533]
const $items=document.getElementById('items')
const html=[]
for(const item of items){
    html.push(`<p style="text-align: center;">
    <span style="font-size: 5rem;">&#${item};</span><br>
<code>${item}</code>
</p>`)
  } 
  
  $items.innerHTML = html.join('')
