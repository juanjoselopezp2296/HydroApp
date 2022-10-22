
const showOutput = () => {

    if(localStorage.getItem('c_name_i') != "" && 
       localStorage.getItem('c_email_i') != "" && 
       localStorage.getItem('charge_on_peak') != "" &&
       localStorage.getItem('charge_off_peak') != "" &&
       localStorage.getItem('charge_mid_peak') != "" &&
       localStorage.getItem('charge_gross') != "" &&
       localStorage.getItem('charge_hst') != "" &&
       localStorage.getItem('charge_provincial_rebate') != "" &&
       localStorage.getItem('charge_net') != ""
    ){
        let cNameI = localStorage.getItem('c_name_i');
        let cEmailI = localStorage.getItem('c_email_i');
        let chargeOnPeak = localStorage.getItem('charge_on_peak');
        let chargeOffPeak = localStorage.getItem('charge_off_peak');
        let chargeMidPeak = localStorage.getItem('charge_mid_peak');
        let chargeGross = localStorage.getItem('charge_gross');
        let chargeHst = localStorage.getItem('charge_hst');
        let chargeProvincialRebate = localStorage.getItem('charge_provincial_rebate');
        let chargeNet = localStorage.getItem('charge_net');

        //Show ouput
        document.getElementById('cNameO').innerHTML = `Customer Name: ${cNameI}`;
        document.getElementById('cEmailO').innerHTML = `Customer Email: ${cEmailI}`;
        document.getElementById('cOnPeakO').innerHTML = `On-Peak Consumption Charges: ${chargeOnPeak} $`;
        document.getElementById('cOffPeakO').innerHTML = `Off-Peak Consumption Charges: ${chargeOffPeak} $`;
        document.getElementById('cMidPeakO').innerHTML = `Mid-Peak Consumption Charges: ${chargeMidPeak} $`;
        document.getElementById('cGrossO').innerHTML = `Gross Consumption Charges: ${chargeGross} $`;
        document.getElementById('cHstO').innerHTML = `HST @ 13%: ${chargeHst} $`;
        document.getElementById('cRebateO').innerHTML = `Provincial Rebate @8%: ${chargeProvincialRebate} $`;
        document.getElementById('cNetO').innerHTML = `Net Consumption Charges: ${chargeNet} $`;
    }else{
        console.log('Error de entrada.');
        document.getElementById('errorLoad').innerHTML = 'Error. Try again. <a href="index.html">return page</a>'
    }
}


showOutput();
