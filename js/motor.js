var estadolicuadora="apagado";
var licuadora = document.getElementById("blender");
function controlarlicuadora(){
    if (estadolicuadora=="apagado"){
        estadolicuadora="encendido";
        licuadora.classList.add("active")
        console.log("encendida");
        
    }else{
        estadolicuadora="apagado"
        licuadora.classList.remove("active")
        console.log("apagada");
        }
}