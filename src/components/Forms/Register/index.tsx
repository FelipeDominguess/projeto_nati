import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    professionalLevel: '',
    fullName: '',
    email: '',
    birthdate: '',
    gender: '',
    country: '',
    rg: '',
    cpf: '',
    phone: '',
    address: '',
    number: '',
    complement: '',
    zip: '',
    neighborhood: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="registration-form-container">
      <h1>INFORME SEUS DADOS</h1>
      <p>Para se inscrever nos cursos, se tornar um aluno e começar a aprender, é necessário informar todos os seus dados. Assim, vamos conseguir manter um relacionamento mais próximo e eficiente.</p>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="professionalLevel">Informe seu Nível Profissional</label>
          <select name="professionalLevel" id="professionalLevel" value={formData.professionalLevel} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="Amante da Maquiagem">Amante da Maquiagem</option>
            <option value="Profissional">Profissional</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Nome Completo</label>
          <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="birthdate">Nascimento</label>
          <input type="text" name="birthdate" id="birthdate" value={formData.birthdate} onChange={handleChange} placeholder="DD/MM/AAAA" />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Sexo</label>
          <input type="text" name="gender" id="gender" value={formData.gender} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="country">País</label>
          <select name="country" id="country" value={formData.country} onChange={handleChange}>
            <option value="">Selecione...</option>
            <option value="Brasil">Brasil</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="rg">RG</label>
          <input type="text" name="rg" id="rg" value={formData.rg} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input type="text" name="cpf" id="cpf" value={formData.cpf} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="(11)99999-9999" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Endereço / Logradouro</label>
          <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="number">Nº</label>
          <input type="text" name="number" id="number" value={formData.number} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="complement">Compl.</label>
          <input type="text" name="complement" id="complement" value={formData.complement} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="zip">CEP</label>
          <input type="text" name="zip" id="zip" value={formData.zip} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="neighborhood">Bairro</label>
          <input type="text" name="neighborhood" id="neighborhood" value={formData.neighborhood} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="state">UF</label>
          <input type="text" name="state" id="state" value={formData.state} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="city">Cidade</label>
          <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Repetir Senha</label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
            Estou de acordo com os <a href="#">termos de uso</a> do site.
          </label>
        </div>

        <button type="submit" className="submit-button">CONTINUAR</button>
      </form>
      <div className="contact-info">
        <p>Ainda tem alguma dúvida? Envie sua pergunta para natidomingues@gmail.com.br</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
