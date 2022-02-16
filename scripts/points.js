/**
 * Contains pre-generated point sets.
 * 
 * David Wisnosky
 */

let preGenPointSetsSelection = document.getElementById('preGeneratedPointSets');
preGenPointSetsSelection.addEventListener('change', getPreGeneratedPointSet);

var preGeneratedPointSets = new Map();

preGeneratedPointSets.set('circle', 
                        [[5.0, 0.0],
                        [4.883102778550433, 1.0748522010551205],
                        [4.537877098354785, 2.099445507801323],
                        [3.9804653285282185, 3.0258710759688254],
                        [3.2369314239091382, 3.8108102756381825],
                        [2.3420422034989508, 4.417560222230115],
                        [1.3376416926461037, 4.817749962596115],
                        [0.27069454292708806, 4.992667069255619],
                        [-0.8089099827638236, 4.93413261270763],
                        [-1.8506907766995724, 4.644883599083957],
                        [-2.8059353268119116, 4.1384449907844525],
                        [-3.629977459615654, 3.4384972942671164],
                        [-4.284285880837946, 2.577769285885108],
                        [-4.738265855914012, 1.596507650679899],
                        [-4.970689785771798, 0.5405950921197097],
                        [-4.970689785771798, -0.5405950921197085],
                        [-4.738265855914012, -1.5965076506799],
                        [-4.284285880837945, -2.5777692858851093],
                        [-3.6299774596156538, -3.4384972942671173],
                        [-2.805935326811913, -4.1384449907844525],
                        [-1.8506907766995724, -4.644883599083957],
                        [-0.8089099827638238, -4.93413261270763],
                        [0.27069454292708794, -4.992667069255619],
                        [1.337641692646105, -4.817749962596115],
                        [2.342042203498952, -4.417560222230114],
                        [3.236931423909139, -3.810810275638181],
                        [3.98046532852822, -3.025871075968824],
                        [4.537877098354785, -2.0994455078013248],
                        [5.0, -1.224646799147353315]]);

preGeneratedPointSets.set('archimedeanSpiral', 
                        [[1.0, 0.0],
                        [1.3173373636064734, 0.9571016183905645],
                        [0.6973392021200407, 2.1461893821917757],
                        [-0.8915003059925871, 2.743755815140087],
                        [-2.842298471301051, 2.065050716684839],
                        [-4.141592653589793, 5.07198818659093316],
                        [-3.8589392097641033, -2.8036834488810207],
                        [-1.6681447214827747, -5.134021546933331],
                        [1.8623058253553195, -5.731587979881644],
                        [5.38390031745868, -3.9116325471752957],
                        [7.283185307179586, -1.783865914806902515],
                        [6.400541055921731, 4.6502652793714825],
                        [2.6389502408455097, 8.121853711674886],
                        [-2.833111344718051, 8.7194201446232],
                        [-7.925502163616309, 5.758214377665754],
                        [-10.42477796076938, 3.83000128844342815],
                        [-8.942142902079366, -6.496847109861931],
                        [-3.6097557602082455, -11.109685876416442],
                        [3.803916864080782, -11.707252309364756],
                        [10.467104009773939, -7.604796208156213],
                        [13.566370614359172, -6.64560493956866915],
                        [11.483744748236996, 8.343428940352387],
                        [4.580561279570957, 14.097518041158008],
                        [-4.774722383443485, 14.69508447410632],
                        [-13.008705855931563, 9.451378038646673],
                        [-16.707963267948966, 1.023067686818262614],
                        [-14.02534659439463, -10.190010770842838],
                        [-5.551366798933718, -17.08535020589955],
                        [5.745527902806241, -17.68291663884787],
                        [15.550307702089192, -11.297959869137133],
                        [19.84955592153876, -1.4585217074285314],
                        [16.566948440552263, 12.036592601333291],
                        [6.522172318296456, 20.073182370641106],
                        [-6.716333422168971, 20.67074880358943],
                        [-18.091909548246818, 13.144541699627593],
                        [-22.991148575128552, 1.97092255578766914],
                        [-19.108550286709896, -13.883174431823743],
                        [-7.492977837659194, -23.06101453538266],
                        [7.687138941531697, -23.658580968330984],
                        [20.633511394404447, -14.991123530118056],
                        [26.132741228718345, -2.560270231895679314],
                        [21.650152132867582, 15.729756262314117],
                        [8.463783357021933, 26.048846700124212],
                        [-8.657944460894425, 26.646413133072542],
                        [-23.175113240562133, 16.837705360608435],
                        [-29.274333882308138, 3.226564735752561414],
                        [-24.19175397902522, -17.57633809280456],
                        [-9.434588876384673, -29.036678864865767],
                        [9.628749980257151, -29.6342452978141],
                        [25.716715086719766, -18.684287191098893]]);

preGeneratedPointSets.set('grid', 
                        [[-8, 8],
                        [-4, 8],
                        [0, 8],
                        [4, 8],
                        [8, 8],
                        [-8, 4],
                        [-4, 4],
                        [0, 4],
                        [4, 4],
                        [8, 4],
                        [-8, 0],
                        [-4, 0],
                        [0, 0],
                        [4, 0],
                        [8, 0],
                        [-8, -4],
                        [-4, -4],
                        [0, -4],
                        [4, -4],
                        [8, -4],
                        [-8, -8],
                        [-4, -8],
                        [0, -8],
                        [4, -8],
                        [8, -8]]);

function getPreGeneratedPointSet() {

    if (!editPointsSelection.checked){
        return;
    }

    resetAll();

    newPointSet = preGeneratedPointSets.get(preGenPointSetsSelection.value);
    
    updatePointTextBox(newPointSet);

    plot();
}