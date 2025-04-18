export const encryptData = (data) => {
    const encoded = Buffer.from(JSON.stringify(data)).toString('base64');
    return encoded;
  };
  