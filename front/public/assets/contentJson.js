import { IMAGES } from '@/utils/constants';
export const content = {
  bottom_heading: `${IMAGES}/bottom-heading.svg`,

  section_request_demo: {
    title:
      'برای رشد و بهبود ارتباط با کاربران و مشتریان کسب‌وکارتان آماده‌اید؟',
    desc: `پس از درخواست مشاوره، تمام اطلاعات مورد نیاز شما را در اختیارتان قرار می‌دهیم. هدف ما، ارائه بهترین راهکار بر اساس نیاز کسب و کار شماست تا مسیر رشدتان را هموارتر کنیم. به همین دلیل تیمی متخصص، از لحظه اول در کنار شما هستند تا با استفاده از  تجربه و مهارت‌هایشان، بهترین راهکار را به شما ارائه کنند.<br/>منتظرتان هستیم!`,

    first_name: {
      title: 'نام',
      validate: 'نام شما باید بیشتر از دو حرف باشد.',
    },
    last_name: {
      title: 'نام خانوادگی',
      validate: 'نام خانوادگی شما باید بیشتر از دو حرف باشد.',
    },
    //job_placeholder: 'E.g., Marketing Manager',
    job_title: {
      title: 'سمت سازمانی',
      validate: 'سمت سازمانی خود را وارد کنید',
    },
    company_name: {
      title: 'نام مجموعه',
      validate: 'نام شرکت خود را وارد کنید.',
    },
    //company_placeholder: 'E.g., ABC Company',
    company_email: {
      title: 'ایمیل سازمانی',
      placeholder: 'example@gmail.com',
      validate: 'ایمیل خود را درست وارد کنید',
    },

    contact_number: {
      title: 'شماره تماس *',
      validate: 'شماره همراه خود را وارد کنید',
    },
    industry: {
      title: 'صنعت',
      option: [
        { value: 'E-commerce', label: 'E-commerce' },
        { value: 'Media', label: 'Media' },
        { value: 'Education', label: 'Education' },
        { value: 'Travel', label: 'Travel' },
        { value: 'Other', label: 'Other' },
      ],
    },
    active_user: {
      title: 'تعداد کاربران فعال ماهانه',
      option: [
        { value: 'Up Top 10k', label: 'تا ۱۰ هزار' },
        { value: 'Up To 50k', label: 'تا ۵۰ هزار' },
        { value: 'More Than 50k', label: 'بیش از ۵۰ هزار' },
      ],
    },
    hear_about: {
      title: 'چگونه با ما آشنا شده‌اید؟',
      option: [
        { value: 'Social Medias', label: 'شبکه های اجتماعی' },
        { value: 'Search Engines', label: 'موتورهای جستجو' },
        { value: 'Our Events', label: 'ایونت های ما' },
        { value: 'Other', label: 'دیگران' },
      ],
    },
    country: 'کشور',
    tell_us_more: 'توضیحات تکمیلی',
    dropdown: { placeholder: 'انتخاب', validate: 'یک گزینه را انتخاب کنید' },
    agree: 'می‌خواهم از آپدیت ها و پیشنهادات اسمارتک باخبر شوم.',
    submit: 'درخواست مشاوره',
    submission_modal: {
      header: 'ارسال شد',
      description:
        '.ما اطلاعات شما را دریافت کرده‌ایم و از انتخاب شما سپاسگزاریم\n . ما درخواست شما را بررسی کرده و در اسرع وقت با شما تماس خواهیم گرفت',
      ok: 'تایید',
    },
  },
  newsletter: {
    empty_validate: 'ایمیل خود را وارد کنید',
    validate: 'ایمیل خود را به صورت صحیح وارد کنید',
  },
  blog: {
    categories: {
      title: 'همه',
    },
    topHeader: {
      title: 'اخبار',
      description: 'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید',
    },
    search: {
      placeholder: 'کلید‌واژه مورد نظر شما ...',
      button: 'جستجوی مقاله',
    },
    latest_post: 'آخرین اخبار',
  },

  teams: [],
};

export const pages = {
  // background
  header_icon: `${IMAGES}/heading.svg`,
  header_blog: `url(${IMAGES}/bg/bg-blur-header-blog.svg) top/100% 
  no-repeat`,
  blur_left: `url(${IMAGES}/bg/bg-blur-left-blue.svg)  no-repeat`,
  blog_section_bg: `url('${IMAGES}/bg/bg-blur-right-white.svg') left no-repeat`,
  counter_bg: `radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)`,
  blue_gradient_bg:
    'radial-gradient(50% 50% at 50% 50%, #173466 0%, #11264B 100%)',
  bg_caroucel_image:
    'url("/assets/images/bg/bg-blur-caroucel.png") left/cover no-repeat',
  bg_card: '/assets/images/bg/bg-blur-card.svg',
  bg_form: `url(${IMAGES}/bg/bg-blur-left-blue.svg)  no-repeat,#F2F6FE`,
  bg_contactUs: `url(${IMAGES}/bg/bg-blur-header-blog.svg) top/100% 
  no-repeat`,
  newsletter: {
    empty_validate: 'ایمیل خود را وارد کنید',
    validate: 'ایمیل خود را به صورت صحیح وارد کنید',
  },
  blog: {
    categories: {
      title: 'همه',
    },
    topHeader: {
      title: 'اخبار',
      description: 'در جریان آخرین اخبار مارکتینگ تکنولوژی باشید',
    },
    search: {
      placeholder: 'کلید‌واژه مورد نظر شما ...',
      button: 'جستجوی مقاله',
    },
    latest_post: 'آخرین اخبار',
    related_posts: 'مقالات مرتبط',
  },
  contact_us: {
    title: 'تماس با ما',
    description: '',
    sections: [
      {
        type: 'contact-info',
        data: [
          {
            title: 'تماس با ما',
            description:
              'برای راهنمایی و همراهی بیش‌تر شما می‌توانید از روش‌های زیر با ما در ارتباط باشید',
            img: `${IMAGES}/contactUs.png`,
          },
          {
            contact_info: [
              {
                description:
                  'تیم ما آماده شنیدن قصه‌های شماست تا بتوانیم بهترین راه‌حل‌ فروش‌تان را در کنار هم متحول کنیم.',
                contact: [
                  {
                    contactName: 'ایمیل:',
                    info: 'info@adverge.ir',
                    link: 'mailto:info@adverge.ir',
                    color: 'primary.4',
                  },
                  {
                    contactName: 'تلفن:',
                    info: '021-۴۳۰۰۰۰۸۶',
                    link: 'tel:02143000086',
                    color: 'primary.4',
                  },
                  {
                    contactName: 'آدرس:',
                    info: 'ایران، تهران، شهرک غرب، خیابان مهستان، مهستان ۱۱،  پلاک ۱۵',
                    link: 'https://goo.gl/maps/6TuUt3Zaw6svt9DTA',
                    color: 'primary.4',
                  },
                ],
              },

              {
                title: 'با ما در ارتباط باشید :',
                description:
                  'ما را در رسانه های اجتماعی دنبال کنید تا از آخرین اخبار،  رویدادها و تبلیغات به روز بمانید',
              },
            ],
          },
          {
            social: {
              instagram: {
                label: 'Instagram',
                link: 'https://www.instagram.com/adverge_ir/',
              },
              linkedin: {
                label: 'linkedin',
                link: 'https://ir.linkedin.com/company/adverge-io',
              },
            },
          },
        ],
      },
      {
        type: 'contact-form',
        data: {
          title:
            'برای رشد و بهبود ارتباط با کاربران و مشتریان کسب‌وکارتان آماده‌اید؟',
          desc: `پس از درخواست مشاوره، تمام اطلاعات مورد نیاز شما را در اختیارتان قرار می‌دهیم. هدف ما، ارائه بهترین راهکار بر اساس نیاز کسب و کار شماست تا مسیر رشدتان را هموارتر کنیم. به همین دلیل تیمی متخصص، از لحظه اول در کنار شما هستند تا با استفاده از  تجربه و مهارت‌هایشان، بهترین راهکار را به شما ارائه کنند.<br/>منتظرتان هستیم!`,

          full_name: {
            title: 'نام و نام‌خانوادگی',
            validate: 'نام شما باید بیشتر از دو حرف باشد.',
          },
          first_name: {
            title: 'نام',
            validate: 'نام شما باید بیشتر از دو حرف باشد.',
          },
          last_name: {
            title: 'نام خانوادگی',
            validate: 'نام خانوادگی شما باید بیشتر از دو حرف باشد.',
          },
          //job_placeholder: 'E.g., Marketing Manager',
          job_title: {
            title: 'سمت سازمانی',
            validate: 'سمت سازمانی خود را وارد کنید',
          },
          company_name: {
            title: 'نام مجموعه',
            validate: 'نام شرکت خود را وارد کنید.',
          },
          //company_placeholder: 'E.g., ABC Company',
          company_email: {
            title: 'ایمیل ',
            placeholder: 'example@gmail.com',
            validate: 'ایمیل خود را درست وارد کنید',
          },

          contact_number: {
            title: 'شماره تماس',
            validate: 'شماره همراه خود را وارد کنید',
          },
          industry: {
            title: 'صنعت',
            option: [
              { value: 'E-commerce', label: 'E-commerce' },
              { value: 'Media', label: 'Media' },
              { value: 'Education', label: 'Education' },
              { value: 'Travel', label: 'Travel' },
              { value: 'Other', label: 'Other' },
            ],
          },
          active_user: {
            title: 'تعداد کاربران فعال ماهانه',
            option: [
              { value: 'Up Top 10k', label: 'تا ۱۰ هزار' },
              { value: 'Up To 50k', label: 'تا ۵۰ هزار' },
              { value: 'More Than 50k', label: 'بیش از ۵۰ هزار' },
            ],
          },
          hear_about: {
            title: 'چگونه با ما آشنا شده‌اید؟',
            option: [
              { value: 'Social Medias', label: 'شبکه های اجتماعی' },
              { value: 'Search Engines', label: 'موتورهای جستجو' },
              { value: 'Our Events', label: 'ایونت های ما' },
              { value: 'Other', label: 'دیگران' },
            ],
          },
          country: 'کشور',
          message: {
            title: 'پیام شما',
            placeholder: 'نظر، سوالات و پیشنهادات شما ...',
            validate: 'پیام خود را وارد کنید',
          },
          dropdown: {
            placeholder: 'انتخاب',
            validate: 'یک گزینه را انتخاب کنید',
          },
          agree: 'می‌خواهم از آپدیت ها و پیشنهادات اسمارتک باخبر شوم.',
          submit: 'ارسال پیام',
          submission_modal: {
            header: 'ارسال شد',
            description:
              '.ما اطلاعات شما را دریافت کرده‌ایم و از انتخاب شما سپاسگزاریم\n . ما درخواست شما را بررسی کرده و در اسرع وقت با شما تماس خواهیم گرفت',
            ok: 'تایید',
          },
        },
      },
    ],
  },
};
