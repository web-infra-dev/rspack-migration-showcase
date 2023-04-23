import React from 'react';
import { Avatar, version, Dropdown, Menu, Spin } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { SelectLang } from '@/core/plugin-locale';

export function getRightRenderContent(opts: {
  runtimeConfig: any;
  loading: boolean;
  initialState: any;
  setInitialState: any;
}) {
  if (opts.runtimeConfig.rightRender) {
    return opts.runtimeConfig.rightRender(
      opts.initialState,
      opts.setInitialState,
      opts.runtimeConfig,
    );
  }

  const avatar = (
    <span className="umi-plugin-layout-action">
      <Avatar
        size="small"
        className="umi-plugin-layout-avatar"
        src={
          opts.initialState?.avatar ||
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        }
        alt="avatar"
      />
      <span className="umi-plugin-layout-name">{opts.initialState?.name}</span>
    </span>
  );

  if (opts.loading) {
    return (
      <div className="umi-plugin-layout-right">
        <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
      </div>
    );
  }

  const langMenu = {
    className: 'umi-plugin-layout-menu',
    selectedKeys: [],
    items: [
      {
        key: 'logout',
        label: (
          <>
            <LogoutOutlined />
            退出登录
          </>
        ),
        onClick: () => {
          opts?.runtimeConfig?.logout?.(opts.initialState);
        },
      },
    ],
  };
  // antd@5 和  4.24 之后推荐使用 menu，性能更好
  const dropdownProps =
    version.startsWith('5.') || version.startsWith('4.24.')
      ? { menu: langMenu }
      : { overlay: <Menu {...langMenu} /> };

  return (
    <div className="umi-plugin-layout-right anticon">
      {opts.runtimeConfig.logout ? (
        <Dropdown {...dropdownProps} overlayClassName="umi-plugin-layout-container">
          {avatar}
        </Dropdown>
      ) : (
        avatar
      )}
      <SelectLang />
    </div>
  );
}
