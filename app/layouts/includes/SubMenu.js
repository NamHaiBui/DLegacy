"use client"
const SubMenu = () => {
  const menuItems = [
    { id: 0, name: "Home" },
    { id: 1, name: "Saved" },
    { id: 2, name: "Sell" },
  ];
  return (
    <>
      <div id="TopMenu" className="border-b">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[13px] text -[#333333] px-2 h-8"
          >
            {menuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="px-3 hover:underline cursor-pointer"
                >
                  item.name
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubMenu;
