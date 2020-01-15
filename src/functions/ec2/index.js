import EC2 from 'aws-sdk/clients/ec2';

const startEC2 = async(event, context, callback) => {
  const ec2 = new EC2();
  const params = {
    InstanceIds: [
      event.instanceId
    ]
  }

  try {
        await ec2.startInstances(params).promise();
        callback(null, `Your ${event.instanceId} instance started successfully`);
    }
    catch (error) {
        callback(error.message);
    }
}
export  { startEC2 }