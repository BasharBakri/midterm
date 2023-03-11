import { Form, useNavigation } from "react-router-dom"

export default function AddFeedback() {
  const navigation = useNavigation();


  const isSubmitting = navigation.state === 'submitting'


  return <Form className="dailyFeedBackForm" method="put" >
    <p>
      <label className="mainLabel" htmlFor="socialtext"> How would you describe the social atmosphere today? </label>
      <input id="socialtext" type="text" name="socialtext" required />
    </p>
    <p>
      <label className="mainLabel" htmlFor="socialrating"> Please rate the social atmosphere: </label>
      {/* <input id="socialrating" type='range' min={1} max={5} name="socialrating" required defaultValue={0} /> */}

      <label htmlFor="socialrating1">1</label>
      <input id="socialrating1" type="radio" name="socialrating" value="1" required />

      <label htmlFor="socialrating2">2</label>
      <input id="socialrating2" type="radio" name="socialrating" value="2" required />
      <label htmlFor="socialrating3">3</label>
      <input id="socialrating3" type="radio" name="socialrating" value="3" required />
      <label htmlFor="socialrating4">4</label>
      <input id="socialrating4" type="radio" name="socialrating" value="4" required />
      <label htmlFor="socialrating5">5</label>
      <input id="socialrating5" type="radio" name="socialrating" value="5" required />


    </p>
    <p>
      <label className="mainLabel" htmlFor="generaltext"> How would you describe today? </label>
      <input id="generaltext" type="text" name="generaltext" required />
    </p>
    <p>
      <label className="mainLabel" htmlFor="generalrating"> Please rate the general atmosphere today: </label>
      {/* <input id="generalrating" type='range' min={1} max={5} name="generalrating" required defaultValue={0} /> */}


      <label htmlFor="generalrating1">1</label>
      <input id="generalrating1" type="radio" name="generalrating" value="1" required />

      <label htmlFor="generalrating2">2</label>
      <input id="generalrating2" type="radio" name="generalrating" value="2" required />
      <label htmlFor="generalrating3">3</label>
      <input id="generalrating3" type="radio" name="generalrating" value="3" required />
      <label htmlFor="generalrating4">4</label>
      <input id="generalrating4" type="radio" name="generalrating" value="4" required />
      <label htmlFor="generalrating5">5</label>
      <input id="generalrating5" type="radio" name="generalrating" value="5" required />
    </p>

    <div >

      <button className="bodyButtons" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
    </div>



  </Form>
}