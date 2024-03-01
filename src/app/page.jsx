"use client"
import React, { useState } from "react"
import '../css/style.css'
import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2'


export default function Page (){

    const curso = ['Selecione o curso','SIM', 'NÃO']
    const tarlegia = ['Tem Alergia?','SIM', 'NÃO']//TIPO ARLERGIA
    const sexo = ['Selecione o sexo','Masculino', 'Feminino']
    const renda = [
        'Selecione uma renda',
        'Entre 0 à R$600,00',
        'R$610,00 à R$1.000,00',
        'R$1.100,00 à R$1.500,00',
        'R$1.600,00 à R$2.000,00',
        'Acima de R$2.000,00'
    ]

    const [checkMarcado, setCheckMarcado] = useState(false)
    const [form, setForm] = useState({
        'nmresponsavel':'',
        'cpfresponsavel':'',
        'rgresponsavel':'',
        'orgUF':'',
        'telefoneresponsavel':'',
        'dtnascimentoresponsavel':'',
        'telefoneemergencia':'',
        'endereco':'',
        'profissao':'',
        'curso':curso[0],
        'qtdPCasa':'',
        'rendaDCasa':renda[0],
        'nmaluno':'',
        'fdata':'',
        'sexo':sexo[0],
        'serieescolar':'',
        'telefone':'',
        'alergia':tarlegia[0],
        'talergia':'',
        'cpfaluno':'',
        'rgaluno':'',
        'termos':false
    })

    const onChange = evt =>{
        const value = evt.target.value
        console.log(evt.target.value)
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]:value
        }))
    }

    const handleCheckboxChange = (e) =>{
        console.log(e.target.checked)
        setCheckMarcado(e.target.checked)
        setForm((old)=>({
            ...old,
            termos:e.target.checked,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            const response = await fetch('/pages/api/hello',
                {
                    method: 'POST',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    body:JSON.stringify(form)
                }                
            )

            const data = await response.json()
            console.log(data)


            Swal.fire({
                title: "Cadastro efetuado com sucesso!",
                text: `Parabéns ${form.nmaluno} você foi cadastrado.`,
                icon: "success"
              });

            
            setForm((old) =>({
                ...old,
                'nmresponsavel':'',
                'cpfresponsavel':'',
                'rgresponsavel':'',
                'orgUF':'',
                'telefoneresponsavel':'',
                'dtnascimentoresponsavel':'',
                'telefoneemergencia':'',
                'endereco':'',
                'profissao':'',
                'curso':curso[0],
                'qtdPCasa':'',
                'rendaDCasa':renda[0],
                'nmaluno':'',
                'fdata':'',
                'sexo':sexo[0],
                'serieescolar':'',
                'telefone':'',
                'alergia':tarlegia[0],
                'talergia':'',
                'cpfaluno':'',
                'rgaluno':'',
                'termos':false
            }))
            setCheckMarcado(false)
        }catch(e){
            console.log('Erro: ', e)
        }
    };

    return(
        <div className="container">
            <pre>
                {JSON.stringify(form,2,null)}
            </pre>
        
        <form onSubmit={handleSubmit}>
        <div className="col-md-12 col-12 p-2">
                    <label htmlFor="nome responsavel">Nome do Responsável</label>
                    <input type="text" name="nmresponsavel" 
                    className="form-control p-2 col-md-8"
                    onChange={onChange} 
                    value={form.nmresponsavel}
                    placeholder="Ex: José da Silva"
                    />

                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="cpfresponsavel">CPF RESPONSÁVEL:</label>
                        <input type="text" 
                          name="cpfresponsavel"
                          className="form-control"
                          onChange={onChange} 
                          value={form.cpfresponsavel}  
                        />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="cpfresponsavel">RG RESPONSÁVEL:</label>
                        <input type="text" 
                          className="form-control"
                          onChange={onChange} 
                          name="rgresponsavel"
                          value={form.rgresponsavel}  
                        />
                    </div>
                </div>
                <br />
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="cpfresponsavel">ORGÃO EMISSOR - UF:</label>
                        <input type="text" 
                          className="form-control"
                          onChange={onChange} 
                          name="orgUF"
                          value={form.orgUF}  
                        />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="telefoneresponsavel">TELEFONE DO RESPONSÁVEL:</label>
                        <input type="text" 
                          className="form-control"
                          onChange={onChange} 
                          name="telefoneresponsavel"
                          value={form.telefoneresponsavel}  
                        />
                    </div>
                </div>
                
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="dtnascimentoresponsavel">DATA DE NASCIMENTO DO RESPONSÁVEL:</label>
                        <input type="date" 
                          className="form-control"
                          onChange={onChange} 
                          name="dtnascimentoresponsavel"
                          value={form.dtnascimentoresponsavel}  
                        />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="telefoneemergencia">TELEFONE EM CASO DE EMERGÊNCIA - FALAR COM:</label>
                        <input type="text" 
                          className="form-control"
                          onChange={onChange} 
                          name="telefoneemergencia"
                          value={form.telefoneemergencia}  
                        />
                    </div>
                </div>
                <div className="col-md-12 col-12 p-2">

                    <label htmlFor="endereco">ENDEREÇO:</label>
                    <input type="text" 
                        className="form-control"
                        onChange={onChange} 
                        name="endereco"
                        value={form.endereco}  
                    />
                </div>
                <br />
                
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="profissao">PROFISSÃO:</label>
                        <input type="text" 
                          className="form-control"
                          onChange={onChange} 
                          name="profissao"
                          value={form.profissao}  
                        />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="cursos">Interesse em cursos</label>
                        <select name="curso" id="cursos"
                        onChange={onChange}
                        className="form-select"
                        value={form.curso}
                        >
                            {
                                curso.map((opcao) =>(
                                    <option key={opcao} 
                                        value={opcao}
                                    >
                                        {opcao}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="qtdPCasa">Quantas pessoas moram na casa:</label>
                        <input type="text" 
                          className="form-control"
                          onChange={onChange} 
                          name="qtdPCasa"
                          value={form.qtdPCasa}  
                        />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="rendaDCasa">Renda da casa:</label>
                        <select name="rendaDCasa" id="renda"
                        onChange={onChange}
                        className="form-select"
                        value={form.rendaDCasa}
                        >
                            {
                                renda.map((opcao) =>(
                                    <option key={opcao} 
                                        value={opcao}
                                    >
                                        {opcao}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="col-md-12 col-12 p-2 mt-2">
                    <label htmlFor="nome responsavel">DADOS DO ALUNO</label>
                    <input type="text" name="nmaluno" 
                    className="form-control p-2 col-md-8"
                    onChange={onChange} 
                    value={form.nmaluno}
                    placeholder="Ex: Lucas Silva"
                    />
                </div>

                 <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="fdata">DATA DE NASCIMENTO:</label>
                        <input type="date" 
                          className="form-control"
                          onChange={onChange} 
                          name="fdata"
                          value={form.fdata}  
                        />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="sexo">Selecione o sexo:</label>
                        <select name="sexo" id="sexo"
                        onChange={onChange}
                        className="form-select"
                        value={form.sexo}
                        >
                            {
                                sexo.map((opcao) =>(
                                    <option key={opcao} 
                                    value={opcao}
                                    >
                                    {opcao}
                                    </option>    
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="serieescolar">SÉRIE ESCOLAR:</label>
                        <input type="text"
                        onChange={onChange}
                        className="form-control"
                        name="serieescolar"
                        value={form.serieescolar}
                         />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="telefone">TELEFONE:</label>
                        <input type="text"
                        onChange={onChange}
                        className="form-control"
                        name="telefone"
                        value={form.telefone}
                         />
                    </div>
                </div>
                 
                 <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="alergia">Alergia a algum medicamento?</label>
                        <select name="alergia" id="alergia"
                        onChange={onChange}
                        className="form-select"
                        value={form.alergia}
                        >
                            {
                                tarlegia.map((opcao) =>(
                                    <option key={opcao} 
                                    value={opcao}
                                    >
                                    {opcao}
                                    </option>    
                                ))
                            }
                        </select>
                    </div>
                    { form.alergia === 'SIM' &&
                        <div className="col-md-6 col-12 p-2">
                            <label htmlFor="talergia">Quais medicamentos?</label>
                            <input type="text"
                            onChange={onChange}
                            className="form-control"
                            name="talergia"
                            value={form.talergia}
                            />
                        </div>
                     }
                </div>
                
                 <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="cpfaluno">CPF:</label>
                        <input type="text"
                        onChange={onChange}
                        className="form-control"
                        name="cpfaluno"
                        value={form.cpfaluno}
                         />
                    </div>
                    <div className="col-md-6 col-12 p-2">
                        <label htmlFor="rgaluno">RG:</label>
                        <input type="text"
                        onChange={onChange}
                        className="form-control"
                        name="rgaluno"
                        value={form.rgaluno}
                         />
                    </div>
                </div>
                <label htmlFor="termos">Termos de uso</label>
                <input type="checkbox" name="termos" value={form.termos} id="termos"
                checked={checkMarcado}
                onChange={handleCheckboxChange}
                />
                <br />
                <br />
                <div className="col-md-12">

                    <button type="submit" disabled={!checkMarcado}
                    className="btn btn-outline-success col-12 col-md-2"
                    >
                        Cadastrar
                    </button>
                </div>
        </form>
        </div>
    )
}