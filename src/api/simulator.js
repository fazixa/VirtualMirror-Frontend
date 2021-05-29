import axios from 'axios';

function createFormData(form) {
  var bodyFormData = new FormData();
  bodyFormData.append('user_image', form.fileUpload);
  bodyFormData.append('user_id', form.userID);
  bodyFormData.append('r_value', form.r_value);
  bodyFormData.append('g_value', form.g_value);
  bodyFormData.append('b_value', form.b_value);
  console.log(bodyFormData)
  return bodyFormData
}

function createFormDataLip(form) {
  var bodyFormData = new FormData();
  bodyFormData.append('user_image', form.fileUpload);
  bodyFormData.append('user_id', form.userID);
  bodyFormData.append('r_value', form.r_value);
  bodyFormData.append('g_value', form.g_value);
  bodyFormData.append('b_value', form.b_value);
  bodyFormData.append('l_type', form.l_type);
  bodyFormData.append('gloss', form.gloss);
  console.log(bodyFormData)
  return bodyFormData
}

async function getLipSimulator(form) {        

  // const response = await axios.post('simulator/lip', bodyFormData, { responseType: "blob" });
  const response = await axios.post('makeup/image/lipstick', createFormDataLip(form));
  return response.data;
}

async function getEyeshadowSimulator(form) {        

  // const response = await axios.post('simulator/lip', bodyFormData, { responseType: "blob" });
  const response = await axios.post('makeup/image/eyeshadow', createFormData(form));
  return response.data;
}

async function getBlushSimulator(form) {        
  
  const response = await axios.post('makeup/image/blush', createFormData(form));
  return response.data;
}

async function getFoundationSimulator(form) {        

  const response = await axios.post('makeup/image/foundation', createFormData(form));
  return response.data;
}

async function getConcealerSimulator(form) {        

  const response = await axios.post('makeup/image/concealer', createFormData(form));
  return response.data;
}

async function getEyelinerSimulator(form) {        

  const response = await axios.post('makeup/image/eyeliner', createFormData(form));
  return response.data;
}

async function getLensSimulator(form) {        

  const response = await axios.post('makeup/image/lens', createFormData(form));
  return response.data;
}


export {
  getLipSimulator,
  getEyeshadowSimulator,
  getBlushSimulator,
  getFoundationSimulator,
  getConcealerSimulator,
  getEyelinerSimulator,
  getLensSimulator

};