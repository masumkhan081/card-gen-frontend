<div
    id='card-picture'
    ref={cardPictureRef}
    className="relative w-[296.34px] h-[385px] bg-transparent m-0 p-0"
// style={{
//   backgroundImage: `url(${rarity})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }}
>

    <Image
        className="absolute top-[0px] left-[0px] w-[316.34px] h-[405px] m-0 p-0 max-w-[306.34px] min-w-[306.34px] max-h-[395px] min-h-[395px]"
        src={rarity}
        width={306.34}
        height={395}

    />





    <div
        className="absolute top-[46px] left-[45px] w-[66px]"
        style={{
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: 'rgb(250, 250, 250)'

        }}
    >

        <div className="flex-1 bg-transparent text-[20px] font-bold"><center>{overall}</center></div>

    </div>

    <div
        className="absolute top-[71px] left-[45px] w-[66px]"
        style={{
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: 'rgb(250, 250, 250)'
        }}
    >
        <div className="flex-1 bg-transparent text-[20px] font-bold maxline-1"><center>{positions}</center></div>
    </div>




    <div className="flex items-center justify-center gap-3 m-0 bg-transparent m-10 max-w-[296.34px] min-w-[296.34px] max-h-[385px] min-h-[385px] ">
        {playerImage ?
            (<Image
                src={playerImage ? URL.createObjectURL(playerImage) : ''}
                alt={playerName || ''}
                layout="intrinsic"
                width={296.34}
                height={385}
                className="object-contain"
                style={{ zIndex: '200' }}
            />)
            :
            (
                ''
            )
        }

    </div>



    {/* diamond card */}




    {playstyle.length > 0 ?
        (
            <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[165px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[7px]  justify-center bg-transparent">

                    <Image
                        src={imagePath} // Assuming playstyle contains the image filename
                        alt="Icon" // Provide an alt attribute for accessibility
                        width={13} // Specify the width of the image
                        height={13} // Specify the height of the image
                        className='p-0 m-0 max-w-[13px] min-w-[13px] max-h-[13px] min-h-[13px]'
                    />
                </div>

            </div>

        )
        :
        (
            ''
        )

    }


    {playstyle.length > 1 ?
        (
            <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[195px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[7px]  justify-center bg-transparent">

                    <Image
                        src={imagePath1} // Assuming playstyle contains the image filename
                        alt="Icon" // Provide an alt attribute for accessibility
                        width={13} // Specify the width of the image
                        height={13} // Specify the height of the image
                        className='p-0 m-0 max-w-[13px] min-w-[13px] max-h-[13px] min-h-[13px]'
                    />
                </div>

            </div>

        )
        :
        (
            ''
        )

    }

    {playstyle.length > 2 ?
        (
            <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[225px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[7px]  justify-center bg-transparent">

                    <Image
                        src={imagePath2} // Assuming playstyle contains the image filename
                        alt="Icon" // Provide an alt attribute for accessibility
                        width={13} // Specify the width of the image
                        height={13} // Specify the height of the image
                        className='p-0 m-0 max-w-[13px] min-w-[13px] max-h-[13px] min-h-[13px]'
                    />
                </div>

            </div>

        )
        :
        (
            ''
        )

    }


    {playstyle.length > 3 ?
        (
            <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[255px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[7px]  justify-center bg-transparent">

                    <Image
                        src={imagePath3} // Assuming playstyle contains the image filename
                        alt="Icon" // Provide an alt attribute for accessibility
                        width={13} // Specify the width of the image
                        height={13} // Specify the height of the image
                        className='p-0 m-0 max-w-[13px] min-w-[13px] max-h-[13px] min-h-[13px]'
                    />
                </div>

            </div>

        )
        :
        (
            ''
        )

    }




    {/* <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[195px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

              <Image
                src={imagePath1} // Assuming playstyle contains the image filename
                alt="Icon" // Provide an alt attribute for accessibility
                width={13} // Specify the width of the image
                height={13} // Specify the height of the image
              />
            </div>

          </div>


          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[225px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

              <Image
                src={imagePath2} // Assuming playstyle contains the image filename
                alt="Icon" // Provide an alt attribute for accessibility
                width={13} // Specify the width of the image
                height={13} // Specify the height of the image
              />
            </div>

          </div>


          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[255px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

              <Image
                src={imagePath3} // Assuming playstyle contains the image filename
                alt="Icon" // Provide an alt attribute for accessibility
                width={13} // Specify the width of the image
                height={13} // Specify the height of the image
              />
            </div>

          </div> */}






    {/*upper rectangle part */}

    {alternatePositions.length > 0 ?

        (
            <div
                className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[74px] left-[249px]"
                style={{
                    border: '1px solid red',
                    borderRadius: '5.63899px',
                    fontSize: '16.1114px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'  /* Ensures that clicks and interactions don't affect the content */
                }}
            >
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                        <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{alternatePositions[0]}</text>
                    </svg>
                </div>
            </div>
        )
        :
        (
            ''
        )
    }

    {alternatePositions.length > 1 ?

        (
            <div
                className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[96px] left-[249px]"
                style={{
                    border: '1px solid red',
                    borderRadius: '5.63899px',
                    fontSize: '16.1114px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'  /* Ensures that clicks and interactions don't affect the content */
                }}
            >
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                        <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{alternatePositions[1]}</text>
                    </svg>
                </div>
            </div>
        )
        :
        (
            ''
        )
    }

    {alternatePositions.length > 2 ?

        (
            <div
                className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[118px] left-[249px]"
                style={{
                    border: '1px solid red',
                    borderRadius: '5.63899px',
                    fontSize: '16.1114px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'  /* Ensures that clicks and interactions don't affect the content */
                }}
            >
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                        <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{alternatePositions[2]}</text>
                    </svg>
                </div>
            </div>
        )
        :
        (
            ''
        )
    }




    {/*lower rectangle part */}

    {foot ?
        (
            <div
                className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[204px] left-[249px]"
                style={{
                    border: '1px solid red',
                    borderRadius: '5.63899px',
                    fontSize: '16.1114px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                }}
            >
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                        <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{foot}</text>
                    </svg>
                </div>
            </div>
        )
        :
        (
            ''
        )
    }


    {(skill || weakfoot) ?
        (
            <div
                className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[229px] left-[249px]"
                style={{
                    border: '1px solid red',
                    borderRadius: '5.63899px',
                    fontSize: '16.1114px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                }}
            >
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                        <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial' >{skill}⭑{weakfoot}</text>
                    </svg>
                </div>
            </div>
        )
        :
        (
            ''
        )
    }


    {(attack || defense) ?
        (
            <div
                className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[254px] left-[249px]"
                style={{
                    border: '1px solid red',
                    borderRadius: '5.63899px',
                    fontSize: '16.1114px',
                    fontWeight: 'bold',
                    pointerEvents: 'none'
                }}
            >
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                        <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{attack}·{defense}</text>
                    </svg>
                </div>
            </div>
        )
        :
        (
            ''
        )
    }



    {/* footer text */}

    <div
        className="h-[58.75px] w-[224px] p-[10px] flex flex-row items-center justify-center gap-1 absolute top-[240px] left-[37px]"
        style={{
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: 'rgb(250, 250, 250)'
        }}
    >
        <div className="flex-1 bg-transparent text-[19px] font-bold maxline-1"><center>{playerName}</center></div>
    </div>

    <div
        className="h-[58.75px] w-[224px] p-[0px] flex flex-row items-center justify-center gap-1 absolute top-[267px] left-[37px]"
        style={{
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: 'rgb(250, 250, 250)',
        }}
    >
        <div className="flex-1 bg-transparent text-[12px]">PAC<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">SHO<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">PAS<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">DRI<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">DEF<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">PHY<br /></div>
    </div>

    <div
        className="h-[58.75px] w-[224px] p-[0px] flex flex-row items-center justify-center gap-1 absolute top-[285px] left-[39px]"
        style={{
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: 'rgb(250, 250, 250)',
        }}
    >
        <div className="flex-1 bg-transparent text-[12px]">{pac ? pac : 0}<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">{sho ? sho : 0}<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">{pass ? pass : 0}<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">{dri ? dri : 0}<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">{def ? def : 0}<br /></div>
        <div className="flex-1 bg-transparent text-[12px]">{phy ? phy : 0}<br /></div>
    </div>

    {/* images and logo */}

    <div
        className="h-[58.75px] w-[224px] p-[10px] flex flex-row items-center justify-center gap-3 absolute top-[314px] left-[37px]"
        style={{
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: 'rgb(250, 250, 250)'
        }}
    >
        {nation ? (
            <div className="bg-transparent max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px] flex items-center justify-center">
                <Image className='p-0 m-0 max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px]' src={nation} width={26} height={18.13} alt='nation' />
            </div>
        ) : null}

        {league ? (
            <div className="bg-transparent p-0 m-0 max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px] flex items-center justify-center">
                <Image className='p-0 m-0 max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px]' src={league} width={22} height={12} alt='league' />
            </div>
        ) : null}



    </div>


</div>