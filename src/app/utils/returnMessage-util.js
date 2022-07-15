export default async function returnMessage (res, Number, returnText) {
  if (Number >= 200 && Number <= 299)
  return res.status(Number).json({
  success: {
      status: Number,
      error: false,
      info: {
        data: `${returnText}`
    } 
  }
 });

 if (Number >= 400 && Number <= 500)
  return res.status(Number).json({
  Error: {
      status: Number,
      error: true,
      info: {
        data: `${returnText}`
    } 
  }
 });
}