function openTextFile(){
    var input = document.createElement("input");

    input.type = "file";
    input.accept = "text/plain, text/html, .csv";

    input.click();
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };

}

function processFile(file){
    var reader = new FileReader();
    reader.readAsText(file,"EUC-KR");

    reader.onload = function () {
        // output.innerText += reader.result;
        output.innerText = JSON.stringify(convertCSVToJSON(reader.result));
    };
}