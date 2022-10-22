/*const calculateConsumption = () => {
    
    document.getElementById('errorLoad').innerHTML = '';

    let cNameI = document.querySelector('#cNameI').value;
    let cEmailI = document.querySelector('#cEmailI').value;
    let cOnPeakI = document.querySelector('#cOnPeakI').value;
    let cOffPeakI = document.querySelector('#cOffPeakI').value;
    let cMidPeakI = document.querySelector('#cMidPeakI').value;

    if(cNameI    == "" || 
       cEmailI   == "" ||
       cOnPeakI  == "" ||
       cOffPeakI == "" ||
       cMidPeakI == ""
      ){
        document.getElementById('errorLoad').innerHTML = 'Error. Complete all elements.'
        console.log('unable to reference input vox for errors');
    
    }else{

        let chargeOnPeak = (parseFloat(cOnPeakI) * 0.132).toFixed(2);
        let chargeOffPeak = (parseFloat(cOffPeakI) * 0.065).toFixed(2);
        let chargeMidPeak = (parseFloat(cMidPeakI) * 0.094).toFixed(2);
        let chargeGross = (parseFloat(chargeOnPeak) + parseFloat(chargeOffPeak) + parseFloat(chargeMidPeak)).toFixed(2);
        let chargeHst = parseFloat(parseFloat(chargeGross) * 0.13).toFixed(2);
        let chargeProvincialRebate = (parseFloat(chargeGross) * 0.08).toFixed(2);
        let chargeNet = (parseFloat(chargeGross) + parseFloat(chargeHst) - parseFloat(chargeProvincialRebate)).toFixed(2);


        localStorage.setItem('c_name_i', cNameI);
        localStorage.setItem('c_email_i', cEmailI);
        localStorage.setItem('charge_on_peak', chargeOnPeak);
        localStorage.setItem('charge_off_peak', chargeOffPeak);
        localStorage.setItem('charge_mid_peak', chargeMidPeak);
        localStorage.setItem('charge_gross', chargeGross);
        localStorage.setItem('charge_hst', chargeHst);
        localStorage.setItem('charge_provincial_rebate', chargeProvincialRebate);
        localStorage.setItem('charge_net', chargeNet);

        window.location ="calculation.html"; 
    }
}

let btn = document.getElementById('btnCalculate');

if(btn === undefined){
    console.log('unable to attach to button');
}else{
    btn.addEventListener('click', calculateConsumption);
}*/



const calculateAye = () => {

    const num = "1";
    const num2 = 2
    if(num -20 === num2){
        console.log('ok')
    }else{
        console.log('no');
    }

}


calculateAye();