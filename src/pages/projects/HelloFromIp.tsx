import Axios from 'axios'
const res = await Axios.get('http://ip-api.com/json/').then(
    (res) => {
      console.log(res.data.countryCode)
      return res
    }
  )

  const hello = await Axios.get(`https://hellosalut.stefanbohacek.com/?cc=${res.data.countryCode}`).then(
    (resp) => {
      return resp.data.hello
    }
  )
  
export function HelloFromIp() {
  return (
    <div className="App">
      <div>{hello}!
        <p>Your Country Code: {res.data.countryCode}</p>
      </div>
    </div>
  );
}


