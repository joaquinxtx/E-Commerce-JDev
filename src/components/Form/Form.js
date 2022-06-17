import './Form.css'
import { FormButton, FormContainer, FormEstruc, FormForm, FormGroup, FormInput, FormLabel, FormParagraph, FormSpan, FormTitle } from './Form.elements'



export const Form = ({form , handleChange,checkout}) => {
    
  return (
    <FormContainer>
        <FormForm >
            <FormTitle>
                Finish your purchase
            </FormTitle>
            <FormParagraph>
                Don't you want to buy anything else?
            </FormParagraph>
            <FormEstruc>
                <FormGroup>
                    <FormInput type='text' className='formInput' placeholder=' ' id='name' name='name' value={form.name} onChange={handleChange} required/>
                    <FormLabel htmlFor='name' className='formLabel'>
                        Name:
                    </FormLabel>
                    <FormSpan className='formLine'/>
                </FormGroup>
                <FormGroup>
                    <FormInput type='email' className='formInput' placeholder=' ' id='email' name='email' value={form.email} onChange={handleChange} required/>
                    <FormLabel htmlFor='email' className='formLabel'>
                        Email:
                    </FormLabel>
                    <FormSpan className='formLine'/>
                </FormGroup>
                <FormGroup>
                    <FormInput type='number' className='formInput' placeholder=' ' id='number' name='number' value={form.number} onChange={handleChange} required/>
                    <FormLabel htmlFor='number' className='formLabel'>
                         Number:
                    </FormLabel>
                    <FormSpan className='formLine'/>

                </FormGroup>
                <FormButton type='submit' className='formSubmit' onClick={checkout} >
                    Finish buying
                </FormButton>
            </FormEstruc>
        </FormForm>
    </FormContainer>
  )
}