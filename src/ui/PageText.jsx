/* eslint-disable react/prop-types */
function PageText({ text }) {
  return (
    <div>
      <div className="h-14 border-b border-[rgba(229,233,235,1)]">
        <h1 className="p-4 text-[20px] font-semibold">{text}</h1>
      </div>
    </div>
  );
}

export default PageText;
