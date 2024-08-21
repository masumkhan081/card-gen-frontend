import React from 'react'
import SearchBox from './shared/SearchBox';
import CardPicture from './shared/CardPicture';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';


const CardPage = () => {

  /// Tab

  const tabs = [
    {
      name: 'General', content:
        <MainForm/>
    },

    { name: 'Card Settings', content: <p>This is the content for Tab 2</p> }

  ];

  return (
    <>

      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row  justify-center gap-[20px] w-full h-full">
        <div className="flex flex-col justify-center items-center lg:w-1/3 md:w-full xl:w-1/3 h-full p-6">
          <SearchBox />
          <CardPicture />
        </div>
        <div className="lg:w-2/3 md:w-full xl:w-2/3 h-full p-6">
          <div>
            <Tab tabs={tabs} />
          </div>
        </div>
      </div>

    </>

  );
}

export default CardPage
