// Don't know where to place this yet.
var loader = {};
var mainCPU;
// Run start methods of objs on load.
function loadup() {
   mainCPU = new CPU("main");
   // cpu.start();
   each(ui, function(funct) {funct();});

   each(loader, function(funct){ 
      if (typeof funct == "function") funct(); 
   });
}

window.addEventListener("load", loadup);