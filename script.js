function display1() {

    xml = document.getElementById("myBiz")
    empresa1 = xml.getElementsByTagName("companyName")[0]
    nome = "Name: " + empresa1.getElementsByTagName("Name")[0].firstChild.data
    typeph1 = empresa1.getElementsByTagName("phone")[0].getAttribute("type") + ": "
    telefone1 = typeph1 + empresa1.getElementsByTagName("phone")[0].firstChild.data
    typeph2 = empresa1.getElementsByTagName("phone")[1].getAttribute("type") + ": "
    telefone2 = typeph2 + empresa1.getElementsByTagName("phone")[1].firstChild.data
    email = "email: " + empresa1.getElementsByTagName("email")[0].firstChild.data
  
    frase = "Company: " + empresa1.getElementsByTagName("company")[0].firstChild.data

    alert("Business Card: \n\n" + nome + "\n" + telefone1 + "\n" + telefone2 + "\n" + email + "\n" + frase)
}


function display2() {

    xml = document.getElementById("myBiz")
    empresa2 = xml.getElementsByTagName("companyName")[1]
    nome = "Name: " + empresa2.getElementsByTagName("Name")[0].firstChild.data
    typeph1 = empresa2.getElementsByTagName("phone")[0].getAttribute("type") + ": "
    telefone1 = typeph1 + empresa2.getElementsByTagName("phone")[0].firstChild.data
    typeph2 = empresa2.getElementsByTagName("phone")[1].getAttribute("type") + ": "
    telefone2 = typeph2 + empresa2.getElementsByTagName("phone")[1].firstChild.data
    email = "email: " + empresa2.getElementsByTagName("email")[0].firstChild.data
   
    frase = "Company: " + empresa2.getElementsByTagName("company")[0].firstChild.data

    alert("Business Card: \n\n" + nome + "\n" + telefone1 + "\n"
        + telefone2 + "\n" + email + "\n" + frase)
}
