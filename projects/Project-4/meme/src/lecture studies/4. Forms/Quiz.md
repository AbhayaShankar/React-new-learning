1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?

When the submit button is clicked, all the entereed data is then processed to the .php link provided in the action parameter.

2. In a React app, when do you gather all the data from
   the filled-out form?

State continuously updates and motinors every data entry in the field.
So, The data is kept track of at every point of time.
We gather all the data as the form is being filled.
It holds a local state.

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?

`name` property in State. It helps us keep track of which name is passed when handleEvent is called.

4. What's different about a saving the data from a checkbox element
   vs. other form elements?

checkbox doesn't contain a value attribute, But a boolean value - `checked` property that checks whether the checkbox is selected or not.
If seleected then true else false.

5. How do you watch for a form submit? How can you trigger
   a form submit?

We can add an event handler handleSubmit() that passes our formdata to the api. As our state is updated at every step, we can simply pass the updated data at that time to the api call.
