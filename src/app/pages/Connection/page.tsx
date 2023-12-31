import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://royxatlar.netlify.app/imgs/glavni.svg)",

        backgroundRepeat: "no-repeat",
      }}
    >
      <section className='max-w-6xl mx-auto'>
        <h2 className='text-3xl text-center mt-12 mb-5'>
          <span className='text-white ' id='contact1'>
            КОНТАКТНАЯ{" "}
          </span>{" "}
          <span className=' text-blue-600'>ИНФОРМАЦИЯ</span>
        </h2>
        <div className='  md:flex  justify-center  '>
          <div className='contact_wrap '>
            <div className='contact_wrap-one rounded-lg  bg-[hsla(0,0%,100%,0.8)]  px-6 py-5 shadow-[0_2px_15px_-3px_rgba(59,101,238,0.7),0_10px_20px_-2px_rgba(59,101,238,0.7)] dark:bg-[rgba(59,101,238,0.7)] dark:shadow-emerald-400 md:py-9 md:px-12 mt-[50px] mr-5  bg-opacity-50 ml-5'>
              <h2 className=' mb-3 text-2xl'>главный офис</h2>

              <div className='flex items-start w-72  '>
                <div className='shrink-0'>
                  <div className='inline-block rounded-md bg-primary-100  text-primary'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-6 grow'>
                  <span className='mb-2 font-bold dark:text-white'>
                    Техническая поддержка
                  </span>

                  <div className='text-neutral-500 dark:text-neutral-200'>
                    <Link href='tel:998906989999'>90 698 99 99</Link>
                  </div>
                </div>
              </div>
              <div className='mt-3 w-full shrink-0 grow-0 basis-auto     lg:w-full  z-40'>
                <div className='flex  items-center justify-start'>
                  <div className='shrink-0'>
                    <div className='inline-block rounded-md bg-primary-100 pr-7 pt-1 text-primary'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='23'
                        fill='currentColor'
                        className='bi bi-telegram'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z' />
                      </svg>
                    </div>
                  </div>

                  <div className='  dark:text-white'>
                    <Link
                      target='_blank'
                      href='https://t.me/duawater_bot'
                      className='text-indigo-500 leading-relaxed  tracking-widest  text-center text-sm mt-2 font-bold'
                    >
                      телеграм-бот для заказа
                    </Link>
                  </div>
                </div>
              </div>

              <div className=' mt-2 basis-auto '>
                <div className='flex   justify-start items-center '>
                  <div className='shrink-0'>
                    <div className='inline-block rounded-md bg-primary-100  text-primary'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='ml-6  max-w-xs pr-9'>
                    адрес: Ташкент ш. Мирзо Улугбекский район, квартал Олмачи,
                    улица Тортарика, дом 3
                  </div>
                </div>
              </div>
            </div>
            <div className='contact_wrap-one rounded-lg bg-[hsla(0,0%,100%,0.8)]  px-6 py-5 shadow-[0_2px_15px_-3px_rgba(59,101,238,0.7),0_10px_20px_-2px_rgba(59,101,238,0.7)] dark:bg-[rgba(59,101,238,0.7)] dark:shadow-emerald-400 md:py-9 md:px-12 mt-[50px] mr-5  bg-opacity-50  ml-5'>
              <p className=' max-w-xs pr-20'>
                <span className='block mr-5 text-2xl mb-2'>
                  Часы работы
                  <br />
                </span>
                Понедельник: 8:00 – 17:00 Вторник: 8:00 – 17:00 Среда: 8:00 –
                17:00 Четверг: 8:00 – 17:00 Пятница: 8:00 – 17:00 Суббота: 10:00
                – 16:00 Воскресенье: ЗАКРЫТО
              </p>
            </div>
          </div>
          <div className='message__wrap rounded-lg bg-[hsla(0,0%,100%,0.8)]  px-2 py-2 shadow-[0_2px_15px_-3px_rgba(59,101,238,0.7),0_10px_20px_-2px_rgba(59,101,238,0.7)] dark:bg-[rgba(59,101,238,0.7)] dark:shadow-emerald-400 md:py-4   md:px-2 mt-[50px] mr-5  bg-opacity-50 ml-5'>
            {/* <form
              action='https://formsubmit.co/abduravufovumid@gmail.com h'
              method='POST'
              autoComplete='off'
            >
              <h3 className='text-2xl mt-3 mb-5 w-full'>
                Напишите нам сообщение
              </h3>

              <input
                className='w-full rounded-full border  shadow-[0_2px_15px_-3px_rgba(59,101,238,0.2),0_10px_20px_-2px_rgba(59,101,238,0.5)] outline-0 p-4 mb-11'
                type='text'
                required
                placeholder='name'
              />
              <input
                className='w-full rounded-full border  shadow-[0_2px_15px_-3px_rgba(59,101,238,0.2),0_10px_20px_-2px_rgba(59,101,238,0.5)] outline-0 p-4 mb-11'
                type='email'
                required
                placeholder='email'
              />
              <textarea
                className='w-full h-60 rounded-sm border  shadow-[0_2px_15px_-3px_rgba(59,101,238,0.2),0_10px_20px_-2px_rgba(59,101,238,0.7)] outline-0 p-4 mb-11'
                required
                placeholder='Assalomu aleykum'
              ></textarea>
              <button
                className='rounded-full px-6 py-3 bg-blue-500 text-white'
                type='submit'
              >
                отправлять
              </button>
            </form> */}
            <iframe
              width='100%'
              height='100%'
              className=' h-full w-full inset-0 relative   overflow-hidden bg-cover bg-[100%] bg-no-repeat'
              title='map'
              src=' https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5993.439401308225!2d69.329328!3d41.314961!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzUzLjkiTiA2OcKwMTknNDUuNiJF!5e0!3m2!1sen!2s!4v1694630512397!5m2!1sen!2s'
            />
          </div>
        </div>

        <div className='  md:flex  justify-center  mt-5 mb-5'>
          <div className='contact_wrap '>
            <div className='contact_wrap-one rounded-lg  bg-[hsla(0,0%,100%,0.8)]  px-6 py-5 shadow-[0_2px_15px_-3px_rgba(59,101,238,0.7),0_10px_20px_-2px_rgba(59,101,238,0.7)] dark:bg-[rgba(59,101,238,0.7)] dark:shadow-emerald-400 md:py-9 md:px-12 mt-[50px] mr-5  bg-opacity-50 ml-5'>
              <h2 className=' mb-3 text-2xl'> офис в Самарканде</h2>

              <div className='flex items-start w-72   '>
                <div className='shrink-0'>
                  <div className='inline-block rounded-md bg-primary-100  text-primary'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='2'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='ml-6 grow'>
                  <span className='mb-2 font-bold dark:text-white'>
                    Техническая поддержка
                  </span>

                  <div className='text-neutral-500 dark:text-neutral-200'>
                    <Link href='tel:+998906989999'> 90 698 99 99</Link>
                  </div>
                </div>
              </div>
              <div className='mt-3 w-full shrink-0 grow-0 basis-auto     lg:w-full  z-40'>
                <div className='flex  items-center justify-start'>
                  <div className='shrink-0'>
                    <div className='inline-block rounded-md bg-primary-100 pr-7 pt-1 text-primary'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='23'
                        fill='currentColor'
                        className='bi bi-telegram'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z' />
                      </svg>
                    </div>
                  </div>

                  <div className='  dark:text-white'>
                    <Link
                      target='_blank'
                      href='https://t.me/duawater_bot'
                      className='text-indigo-500 leading-relaxed  tracking-widest  text-center text-sm mt-2 font-bold'
                    >
                      телеграм-бот для заказа
                    </Link>
                  </div>
                </div>
              </div>

              <div className=' mt-2 basis-auto '>
                <div className='flex   justify-start items-center '>
                  <div className='shrink-0'>
                    <div className='inline-block rounded-md bg-primary-100  text-primary'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='ml-6  max-w-xs pr-9'>
                    Самаркандская область, Самаркандский район, Коштамгалинский
                    махалля.
                  </div>
                </div>
              </div>
            </div>
            <div className='contact_wrap-one rounded-lg bg-[hsla(0,0%,100%,0.8)]  px-6 py-5 shadow-[0_2px_15px_-3px_rgba(59,101,238,0.7),0_10px_20px_-2px_rgba(59,101,238,0.7)] dark:bg-[rgba(59,101,238,0.7)] dark:shadow-emerald-400 md:py-9 md:px-12 mt-[50px] mr-5  bg-opacity-50  ml-5'>
              <p className=' max-w-xs pr-20'>
                <span className='block mr-5 text-2xl mb-2'>
                  Часы работы
                  <br />
                </span>
                Понедельник: 8:00 – 17:00 Вторник: 8:00 – 17:00 Среда: 8:00 –
                17:00 Четверг: 8:00 – 17:00 Пятница: 8:00 – 17:00 Суббота: 10:00
                – 16:00 Воскресенье: ЗАКРЫТО
              </p>
            </div>
          </div>
          <div className='message__wrap rounded-lg bg-[hsla(0,0%,100%,0.8)]  px-2 py-2 shadow-[0_2px_15px_-3px_rgba(59,101,238,0.7),0_10px_20px_-2px_rgba(59,101,238,0.7)] dark:bg-[rgba(59,101,238,0.7)] dark:shadow-emerald-400 md:py-4   md:px-2 mt-[50px] mr-5  bg-opacity-50 ml-5'>
            {/* <form
              action='https://formsubmit.co/abduravufovumid@gmail.com h'
              method='POST'
              autoComplete='off'
            >
              <h3 className='text-2xl mt-3 mb-5 w-full'>
                Напишите нам сообщение
              </h3>

              <input
                className='w-full rounded-full border  shadow-[0_2px_15px_-3px_rgba(59,101,238,0.2),0_10px_20px_-2px_rgba(59,101,238,0.5)] outline-0 p-4 mb-11'
                type='text'
                required
                placeholder='name'
              />
              <input
                className='w-full rounded-full border  shadow-[0_2px_15px_-3px_rgba(59,101,238,0.2),0_10px_20px_-2px_rgba(59,101,238,0.5)] outline-0 p-4 mb-11'
                type='email'
                required
                placeholder='email'
              />
              <textarea
                className='w-full h-60 rounded-sm border  shadow-[0_2px_15px_-3px_rgba(59,101,238,0.2),0_10px_20px_-2px_rgba(59,101,238,0.7)] outline-0 p-4 mb-11'
                required
                placeholder='Assalomu aleykum'
              ></textarea>
              <button
                className='rounded-full px-6 py-3 bg-blue-500 text-white'
                type='submit'
              >
                отправлять
              </button>
            </form> */}
            <iframe
              width='100%'
              height='100%'
              className=' h-full w-full inset-0 relative   overflow-hidden bg-cover bg-[100%] bg-no-repeat'
              title='map'
              src=' https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6143.73548071119!2d67.045065!3d39.652691!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzA5LjciTiA2N8KwMDInNDIuMiJF!5e0!3m2!1sen!2s!4v1694708994172!5m2!1sen!2s'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
