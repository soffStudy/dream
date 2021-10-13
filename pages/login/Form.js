import React, { useState } from 'react'
import { useRouter } from 'next/router';
import FormWrapper from './FormWrapper';

const Form = ({ Login, error }) => {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        console.log(e.target.value);
    }

    // bu yerda malumotlar kiritiladi va tekshiriladi. Agar togri bolsa yozilgan page ga otadi, notogri bolsa otmaydi

    return (
        <FormWrapper>
            <div className="row mt-3">
                <div className="col-6 ofset-3">
                    <form onSubmit={submitHandler}>
                        <div className="form-inner">

                            <div className="companyLogo">
                                <div className="login_otish">
                                    <h2>Login</h2>
                                </div>
                                <div className="login_otish">
                                    <div className="nature">
                                        <img src="https://top-school.uz/wp-content/uploads/2020/04/FB_IMG_1616150236272.jpg" alt="soliq gerb" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-danger">
                                {(error != "") ? (<div className="error">{error}</div>) : ""}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Login: </label>
                                <input type="text" name="email" id="email" className="fjf" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} onClick={console.log(details.email)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Parol: </label>
                                <input type="password" name="password" id="password" className="fjf" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </div>
                            <div className="submits">
                                <input type="submit" value="Kirish" className="fjf" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </FormWrapper>
    )
}

export default Form;