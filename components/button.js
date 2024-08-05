export default function Button({children, classes, ...props}) {
  let classesStyle = "px-4 py-2 rounded-md md:text-base ";
  if(classes){
    classesStyle += classes;
  }

  return (
    <button className={classesStyle} {...props}>
        {children}
    </button>
  );

}