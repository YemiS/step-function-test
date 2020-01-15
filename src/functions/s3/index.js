import  S3 from 'aws-sdk/clients/s3';

const writeS3 = async (event, context, callback) => {
  
  const s3 = new S3();
  const params = {
    Bucket: 'sls-logs-bucketyj',
    Key: 'success!!'
 }

  try {
        await s3.putObject(params).promise();
        callback(null, `a log written successfully`);
    }
    catch (error) {
        callback(error.message);
    }
}
export  { writeS3 }
