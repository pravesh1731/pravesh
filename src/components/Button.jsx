const styles = {
  primary: "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-700",
  outline: "border-zinc-300 text-zinc-900 hover:border-zinc-900",
};

const Button = ({ href, variant = "outline", children, ...rest }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${styles[variant]}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
