import { Form, useNavigation } from "react-router-dom"

export default function AddFeedback() {
  const navigation = useNavigation();


  const isSubmitting = navigation.state === 'submitting'



  return <Form method="post" >
    <p>
      <label htmlFor="socialtext"> How was the social atmosphere? </label>
      <input id="socialtext" type="text" name="socialtext" required />
    </p>
    <p>
      <label htmlFor="socialrating"> Please rate the social atmosphere </label>
      <input id="socialrating" type='range' min={1} max={10} name="socialrating" required defaultValue={0} />
    </p>
    <p>
      <label htmlFor="generaltext"> How would you describe today? </label>
      <input id="generaltext" type="text" name="generaltext" required />
    </p>
    <p>
      <label htmlFor="generalrating"> Please rate the general atmosphere today</label>
      <input id="generalrating" type='range' min={1} max={10} name="generalrating" required defaultValue={0} />
    </p>

    <div >
      <button disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Save'}</button>
    </div>



  </Form>
}