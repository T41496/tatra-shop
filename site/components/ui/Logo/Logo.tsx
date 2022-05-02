const Logo = ({ className = '', ...props }) => (
  <img
    src="./tatra-logo.png"
    className={className}
    {...props}
    alt="Tatra Hills Logo"
  />
)

export default Logo
