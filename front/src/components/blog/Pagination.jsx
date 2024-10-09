import { createStyles } from '@mantine/core';
import Link from 'next/link';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
const useStyles = createStyles((theme) => ({
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    listStyle: 'none',
  },
  link: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    fontWeight: 'bold',
  },
  paginationButton: {
    margin: '0 5px',
    width: '35px',
    height: '35px',
    textDecoration: 'none',
    color: theme.colors.primary[1],
  },

  active: {
    backgroundColor: theme.colors.primary[0],
    color: ' #fff',
    borderRadius: '50px',
  },

  disabled: {
    opacity: '0.2',
    pointerEvents: 'none',
  },
}));
const Pagination = ({ currentPage, totalPages }) => {
  const { classes, cx } = useStyles();

  const pagesToShow = [];

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let page = startPage; page <= endPage; page++) {
    pagesToShow.push(page);
  }

  return (
    <ul className={classes.pagination}>
      <li className={classes.paginationButton}>
        <Link href={`/blog/page/${parseInt(currentPage) - 1}`} passHref>
          <a
            className={cx(classes.link, {
              [classes.disabled]: currentPage == 1,
            })}
          >
            <IconChevronLeft />
          </a>
        </Link>
      </li>

      {pagesToShow.map((page) => (
        <li key={page} className={classes.paginationButton}>
          <Link key={page} href={`/blog/page/${page}`} passHref>
            <a
              className={cx(classes.link, {
                [classes.active]: page == currentPage,
              })}
            >
              {page}
            </a>
          </Link>
        </li>
      ))}
      <li className={classes.paginationButton}>
        <Link href={`/blog/page/${parseInt(currentPage) + 1}`} passHref>
          <a
            className={cx(classes.link, {
              [classes.disabled]: currentPage == totalPages,
            })}
          >
            <IconChevronRight />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
