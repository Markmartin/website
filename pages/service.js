import Head from 'next/head'
import Layout from '../components/layout/layout'
import classNames from 'classnames'
import styles from '../styles/service.module.scss'

export default function Service() {
  const serviceItem = 'hvr-grow'
  return (
    <Layout pageName="service">
      <div className={styles.service}>
        <Head>
          <title>服务中心</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.banner}>
            <img
              className={classNames(`${styles['banner-logo']}`, 'animate__animated', 'animate__lightSpeedInRight')}
              src="/images/service/banner-service-logo.png"
            ></img>
          </div>

          <div className={styles['service-type']}>
            <p className={styles['type-title']}>服务类型</p>
            <div className={styles['line']}></div>
            <div className={styles['type-list']}>
              <div className={classNames(`${styles['type-item']}`, `${styles['service-first']}`, serviceItem)}>
                <div className={styles['item-desc']}>
                  <label className={classNames(`${styles['item-title']}`, `${styles['item-common']}`)}>
                    政府公务出行
                  </label>
                  <label className={classNames(`${styles['item-text']}`, `${styles['item-common']}`)}>
                    公务调研、走访，活动用车
                  </label>
                </div>
              </div>
              <div className={classNames(`${styles['type-item']}`, `${styles['service-second']}`, serviceItem)}>
                <div className={styles['item-desc']}>
                  <label className={classNames(`${styles['item-title']}`, `${styles['item-common']}`)}>企业用车</label>
                  <label className={classNames(`${styles['item-text']}`, `${styles['item-common']}`)}>
                    差旅、加班、活动、通勤用车
                  </label>
                </div>
              </div>
              <div className={classNames(`${styles['type-item']}`, `${styles['service-third']}`, serviceItem)}>
                <div className={styles['item-desc']}>
                  <label className={classNames(`${styles['item-title']}`, `${styles['item-common']}`)}>员工用车</label>
                  <label className={classNames(`${styles['item-text']}`, `${styles['item-common']}`)}>
                    差旅、加班、办公通勤、接送机用车
                  </label>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
