import './button.scss'

const Button = ({ onClick, ...atributes }: any)  => {

    return (
            <button className ="button"
            onClick = {onClick}
            {...atributes}
            />

    )
}

export default Button