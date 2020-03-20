export const notes = `
# Checkbox and Switch - Toggle Component

## Purpose
Provides a common checkbox (default) or switch form component

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [ ..., LgToggleModule ],
})
~~~

and in your HTML for a regular *checkbox*:

~~~html
<lg-toggle formControlName="confirm" value="yes">Do you agree?</lg-toggle>
~~~

or for a *switch* set the \`\`variant\`\` property to "switch":

~~~html
<lg-toggle formControlName="confirm" value="yes" variant="switch">Do you agree?</lg-toggle>
~~~

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`checked\`\` | Check status of the toggle | boolean | false | No |
| \`\`value\`\` | Value that is set when the toggle is checked | string | 'on' | No |
| \`\`id\`\` | HTML ID attribute, auto generated if not provided | string | 'lg-toggle-\${nextUniqueId++}' | No |
| \`\`name\`\` | HTML Name attribute, auto generated if not provided | string | 'lg-toggle-\${nextUniqueId++}' | No |
| \`\`variant\`\` | The variant of the toggle | 'checkbox' or 'switch' | 'checkbox | No |

## Using only the SCSS files

Generate the markup as show in the example below.

| Class | Description |
|------|-------------|
| \`\`lg-toggle\`\` | Adds styles to the wrapping element |
| \`\`lg-toggle__label\`\` | Adds styles to the toggle label |
| \`\`lg-toggle__label--switch\`\` | Adds styles to make the toggle look like a switch |
| \`\`lg-toggle__input\`\` | Adds styles to the input element |

### Examples:
~~~html
<div class="lg-toggle">
  <input class="lg-toggle__input" type="checkbox" id="lg-toggle-0" name="checkbox" value="yes">
  <label class="lg-toggle__label" for="lg-toggle-0"> I will bring my Umbrella if it is raining </label>
</div>
~~~
`;