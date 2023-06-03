import style from './ProjectForm.module.css'
export default function ProjectForm() {
	return (
		<form className={style.form}>
			<label htmlFor="projectName">Nome do Projeto:</label>
			<input type="text" id='projectName' placeholder='Digite o nome do projeto...' />
			<label htmlFor="orcamento">Orçamento do Projeto:</label>
			<input type="number" id="orcamento" placeholder="Digite o orçamento total do projeto..." />
			<label htmlFor="category">Selecione a categoria:</label>
			<select name="category" id="cetegory">
				<option disabled selected>Selecione uma categoria...</option>
				<option value="marketing">Marketing</option>
			</select>
			<button type="submit">Criar Projeto</button>
		</form>
	)
}