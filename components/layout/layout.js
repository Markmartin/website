import Link from 'next/link'
import classNames from 'classnames'
import styles from './layout.module.scss'

export default function Layout({ children, pageName }) {
  const itemHover = 'hvr-shrink'
  const footerItem = 'hvr-grow'
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img className={styles.logo} src="/images/logo.png"></img>
        <nav className={styles.nav}>
          <div className={classNames(itemHover, `${styles.item}`)}>
            <Link href="/">
              <label
                className={classNames({
                  [styles.selected]: pageName === 'travel',
                  [styles.unselected]: pageName !== 'travel'
                })}
              >
                风驰出行
              </label>
            </Link>
            {pageName === 'travel' && <div className={styles.line}></div>}
          </div>
          <div className={classNames(itemHover, `${styles.item}`)}>
            <Link href="/service">
              <label
                className={classNames({
                  [styles.selected]: pageName === 'service',
                  [styles.unselected]: pageName !== 'service'
                })}
              >
                服务中心
              </label>
            </Link>
            {pageName === 'service' && <div className={styles.line}></div>}
          </div>
          <div className={classNames(itemHover, `${styles.item}`)}>
            <Link href="/about">
              <label
                className={classNames({
                  [styles.selected]: pageName === 'about',
                  [styles.unselected]: pageName !== 'about'
                })}
              >
                关于我们
              </label>
            </Link>

            {pageName === 'about' && <div className={styles.line}></div>}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles['footer-contact']}>
          <div className={styles['footer-contact-left']}>
            <a className={classNames(footerItem, `${styles['contact-item']}`)}>关于我们</a>
            <a className={classNames(footerItem, `${styles['contact-item']}`)}>服务中心</a>
          </div>
          <div className={styles['footer-contact-right']}>
            <img className={classNames(`${styles['wechat-code']}`, footerItem)} src="/images/wechat-code.png"></img>
            <div className={styles['contact-container']}>
              <label className={styles['contact-item']}>电话：0793-8213368</label>
              <label className={styles['contact-item']}>网址：www.fengchi-tech.com</label>
              <label className={styles['contact-item']}>地址：江西省上饶经济技术开发区兴园西大道</label>
              <label className={styles['contact-item']}>32号双创科技城7号楼3楼</label>
            </div>
          </div>
        </div>
        <label className={styles.copyright}>Copyright ©上饶优驰科技有限公司 2020</label>
      </footer>
    </div>
  )
}
