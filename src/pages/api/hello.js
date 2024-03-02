import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'


const serviceAccountAuth = new JWT({
    email: process.env.NEXT_CLIENTE_EMAIL,
    key: process.env.NEXT_PRIVATE_KEY,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
});

export default async function handler(req, res){
    if(req.method === 'POST'){
    try{

        const doc = new GoogleSpreadsheet(process.env.NEXT_SPREADID, serviceAccountAuth)
    
        await doc.loadInfo()
        console.log(doc.title)
        const sheet = doc.sheetsByIndex[0]
        const data = JSON.parse(req.body)
        console.log(data)

        // sheet.addRow({
        //     'NOME':data.nome,
        //     'TELEFONE':data.telefone,
        //     'TERMOS':data.termos
        // })

        sheet.addRow({
            'NOME DO RESPONSÁVEL':data.nmresponsavel,
            'CPF DO RESPONSÁVEL':data.cpfresponsavel,
            'RG DO RESPONSÁVEL':data.rgresponsavel,
            'ORGÃO EMISSOR - UF':data.orgUF,
            'TELEFONE DO RESPONSÁVEL':data.telefoneresponsavel,
            'DATA DE NASCIMENTO RESPONSÁVEL':data.dtnascimentoresponsavel,
            'TELEFONE EMERGENCIA':data.telefoneemergencia,
            'ENDEREÇO':data.endereco,
            'PROFISSÃO':data.profissao,
            'CURSO':data.curso,	
            'QUANTIDADE DE PESSOAS NA CASA':data.qtdPCasa,
            'RENDA DA CASA':data.rendaDCasa,
            'NOME DO ALUNO':data.nmaluno,
            'DATA DE NASCIMENTO':data.fdata,	
            'SEXO':data.sexo,
            'SERIE ESCOLAR':data.serieescolar,
            'TELEFONE':data.telefone,
            'ALERGIA':data.alergia,	
            'TIPO DE ALERGIA':data.talergia,	
            'CPF DO ALUNO':data.cpfaluno,
            'RG DO ALUNO':data.rgaluno,
            'TERMOS':data.termos
        })

        res.status(200).json(req.body)
        
    }catch(e){
        console.log('error: ', e)
    }
}
    
}