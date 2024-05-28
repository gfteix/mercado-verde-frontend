import React, { useState, FormEvent, ChangeEvent } from 'react';
import { RegisterPayload, register } from '../../api/user';
import './RegisterForm.css'
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<RegisterPayload>({
        email: '',
        password: '',
        name: '',
        street: '',
        houseNumber: '',
        neighborhood: '',
        state: '',
        city: '',
        country: '',
        zipCode: ''
    });

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const cleanForm = () => {
        setFormData({
            email: '',
            password: '',
            name: '',
            street: '',
            houseNumber: '',
            neighborhood: '',
            state: '',
            city: '',
            country: '',
            zipCode: ''
          });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await register(formData);
            cleanForm();
        } catch (err) {
            if (err instanceof Error){
                setError(err.message);
            } else {
                setError(JSON.stringify(err, null, 2))
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className='register-form' onSubmit={handleSubmit}>
            <div className='form-fields-container'>
                <div className='div1 input-container'>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome Completo" required />
                </div>
                <div className='div2 input-container'>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className='div3 input-container'>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" required />
                </div>
                <div className='div4 input-container'>
                    <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Rua" required />
                </div>
                <div className='div5 input-container'>
                    <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} placeholder="Nº" required />
                </div>
                <div className='div6 input-container'>
                    <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Bairro" required />
                </div>
                <div className='div7 input-container'>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Cidade" required />
                </div>
                <div className='div8 input-container'>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Estado" required />
                </div>
                <div className='div9 input-container'>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="País" required />
                </div>
                <div className='div10 input-container'>
                    <input type="text" name="cep" value={formData.zipCode} onChange={handleChange} placeholder="CEP"required />
                </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" disabled={isLoading}>Cadastrar</button>
            <p>Já tem uma conta? <Link className="page-link" to='/'>Login</Link></p>
        </form>
    );
};

export default RegisterForm;
