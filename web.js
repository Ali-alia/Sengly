function quadroot() {
    a = document.getElementById("input_a").value;
    b = document.getElementById("input_b").value;
    c = document.getElementById("input_c").value;
    number_a = parseFloat(a);
    number_b = parseFloat(b);
    number_c = parseFloat(c);
    delta=(b**2)-(4*a*c);
    x_1=(-b+(delta**(1/2)))/(2*a);
    x_2=(-b-(delta**(1/2)))/(2*a);
    document.getElementById("outputX1").innerHTML = x_1;
    document.getElementById("outputX2").innerHTML = x_2;
}

 document.getElementById('btnCal').addEventListener('click',quadroot)