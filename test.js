function post(Url, Options) {
  let url = Url;
  const options = Options;
  if (options.query) {
    url += '?';
    let delimiter = '';

    for (let propName in (options.query || {})) {
      url += (delemiter + (`${propName}=${escape(options.query[propName])}`));
      delimiter = '&';
    }
  }
  log(`Fetching ${url}`);
  let code;

  const body = options.body;
  if (body === null) {
    throw { message: 'Body is required' };
  }

  try {
    // Open Connection
    connection = new java.net.URL(url).openConnection();

    // Set timeout
    const timeout = options.timeout ? options.timeout : 10000;
    connection.setReadTimeout(timeout);
    connection.setConnectTimeout(timeout);

    // Method == POST
    connection.setRequestMethod('POST');

    // Set Content Type
    const contentType = options.contentType != null ? options.contentType : 'text/plain';
    connection.setRequestProperty('Content-Type', contentType);

    // Set Content Length
    connection.setRequestProperty('Content-Length', body.length);

    // Silly Java Stuff
    connection.setUseCaches (false);
    connection.setDoInput(true);
    connection.setDoOutput(true);

    //Send Post Data
    bodyWriter = new java.io.DataOutputStream(connection.getOutputStream());
    bodyWriter.writeBytes(body);
    bodyWriter.flush ();
    bodyWriter.close ();

    code = connection.getResponseCode();
  }

  catch(e) {
    throw new Error({
      code: 0,
      message: `Socket Exception or Server Timeout: ${e}`
    });
  }
  if (code < 200 || code > 299) {
    throw new Error({
      code,
      message: (`Received non-2XX response: ${code}`),
    });
  }

  is = null;
  try {
    is = connection.getInputStream();
    return new String(org.apache.commons.io.IOUtils.toString(is));
  } catch (e) {
    throw new Error({
      message: ('Failed to read server response'),
      code: 0,
    });
  }
  finally {
    try {
      if (is != null)is.close();
    } catch (err) {

    }
  }
}

const text = currentCall.initialText;
const textArr = text.split('#');
const command = textArr[0].toLowerCase();
const infoStr = textArr[1];

const defaultMsg = `Please choose from the following: create#${[name.table]}, trans#${[mPesa.Transaction.Amount]}, or member#${[NewMembers.phoneNumber]}`;

const callObj = {
  text: text,
  sender: currentCall.callerID
}

var objStr = `call=${JSON.stringify(callObj)}`;

if (textArr[2] || !infoStr) {
  say(defaultMsg)
} else if (command === 'create') {
  post('https://dry-retreat-51470.herokuapp.com/api/tropo/create', {
    body: objStr,
    contentType: 'application/x-www-form-urlencoded',
  });
} else if (command === 'trans') {
  post('https://dry-retreat-51470.herokuapp.com/api/tropo/trans', {
    body: objStr,
    contentType: 'application/x-www-form-urlencoded',
  });
} else if (command === 'member') {
  post('https://dry-retreat-51470.herokuapp.com/api/tropo/member', {
    body: objStr,
    contentType: 'application/x-www-form-urlencoded',
  });
} else {
  say(defaultMsg)
}
