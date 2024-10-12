import { useState, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import persianjs from 'persianjs';
import classes from "./PostPagination.module.scss"
export default function PostPagination({ totalPages, currentPage }) {
  
  const router = useRouter();
  const { slug } = router.query;
  var data = [];
  for (var i = 1; i <= totalPages; i++) {
    data.push(i);
  }
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoad(true);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  const allPosts =
    router.pathname.startsWith(`/blog/page/`) || router.pathname === '/blog';
  const categoriesPosts = router.pathname.startsWith('/blog/category/');
  return (
    <>
      {load && (
        <ul className={classes.pagination}>
          {allPosts && (
            <>
              <li className={classes.paginationButtonArrow}>
                <Link
                  passHref
                  href={`${
                    currentPage == totalPages
                      ? `/blog/page/${parseInt(currentPage) - 1}`
                      : 'javascript:void(0)'
                  }
                    `}
                >
                  <a
                    // className={cx(classes.link, {
                    //   [classes.disabled]: currentPage == 1,
                    // })}
                  >
                    <IconChevronLeft />
                  </a>
                </Link>
              </li>

              {data?.map((pageNumber) => (
                <li className={classes.paginationButton} key={pageNumber}>
                  <Link href={`/blog/page/${pageNumber}`} passHref>
                    <a
                      className={cx(classes.link, {
                        [classes.active]: pageNumber == currentPage,
                      })}
                    >
                      {persianjs(pageNumber).englishNumber().toString()}
                    </a>
                  </Link>
                </li>
              ))}

              <li className={classes.paginationButtonArrow}>
                <Link
                  passHref
                  href={`${
                    currentPage == totalPages
                      ? 'javascript:void(0)'
                      : `/blog/page/${parseInt(currentPage) + 1}`
                  }
                    `}
                >
                  <a
                    // className={cx(classes.link, {
                    //   [classes.disabled]: currentPage == totalPages,
                    // })}
                  >
                    <IconChevronRight />
                  </a>
                </Link>
              </li>
            </>
          )}
          {categoriesPosts && (
            <>
              <li className={classes.paginationButton}>
                <Link
                  passHref
                  href={`${
                    currentPage == totalPages
                      ? `/blog/category/${slug}/page/${
                          parseInt(currentPage) - 1
                        }`
                      : 'javascript:void(0)'
                  }
                    `}
                >
                  <a
                    className={cx(classes.link, {
                      [classes.disabled]: currentPage == 1,
                    })}
                  >
                    <IconChevronLeft />
                  </a>
                </Link>
              </li>

              {data?.map((pageNumber) => (
                <li className={classes.paginationButton} key={pageNumber}>
                  <Link
                    href={`/blog/category/${slug}/page/${pageNumber}`}
                    passHref
                  >
                    <a
                      className={cx(classes.link, {
                        [classes.active]: pageNumber == currentPage,
                      })}
                    >
                      {persianjs(pageNumber).englishNumber().toString()}{' '}
                    </a>
                  </Link>
                </li>
              ))}

              <li className={classes.paginationButton}>
                <Link
                  passHref
                  href={`${
                    currentPage == totalPages
                      ? 'javascript:void(0)'
                      : `/blog/category/${slug}/page/${
                          parseInt(currentPage) + 1
                        }`
                  }
                    `}
                >
                  <a
                    className={cx(classes.link, {
                      [classes.disabled]: currentPage == totalPages,
                    })}
                  >
                    <IconChevronRight />
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </>
  );
}
