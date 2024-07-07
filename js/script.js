document.getElementById("items").style.columns = "100px 3";
const items=[128512, 128521, 128533, 128550, 128552, 128556, 128562, 128586, 129303, 129315, 129323, 129488]
const $items=document.getElementById('items')
const html=[]
for(const item of items){
    html.push(`<p style="text-align: center;">
    <span style="font-size: 5rem;">&#${item};</span><br>
<code>${item}</code>
</p>`)
  } 
  
  $items.innerHTML = html.join('')
  

