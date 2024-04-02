import React from 'react';
import { BsIconSize } from '@barnstormer/vue';
import { h } from 'vue';
import { mount, useComponent } from '../../utils/mount';
import { isVue } from '../../utils/utils';
import BsIconBasePageObject from './BsIconBase.PageObject';

const { vue: BsIconBaseVue, react: BsIconBaseReact } = useComponent('BsIconBase');
useComponent('BsIconIndeterminateCheckBox');

describe('sfIconBase', () => {
  const testId = 'svg-icon';
  const pathData =
    'M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12Zm-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8Zm0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16Z';
  const pathHTML = `<path d="${pathData}"></path>`;

  const page = () => new BsIconBasePageObject(testId);

  type InitializeComponentParams = {
    size?: BsIconSize;
    content?: string;
    slotDefault?: boolean;
  };
  const initializeComponent = ({ size = BsIconSize.base, slotDefault = true }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: BsIconBaseVue,
        props: { size },
        attrs: { 'data-testid': testId },
        slots: {
          ...(slotDefault && { default: () => h('path', { d: pathData }) }),
        },
      },
      react: (
        <BsIconBaseReact data-testid={testId} size={size}>
          {slotDefault ? <path d={pathData} /> : undefined}
        </BsIconBaseReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(200, 200);
  });

  it('when default slot is filled', () => {
    initializeComponent({ slotDefault: true });

    page().hasXmlNamespace('http://www.w3.org/2000/svg').containsPathHTML(pathHTML).makeSnapshot();
  });

  if (isVue) {
    it('when svg content is provided via content prop', () => {
      initializeComponent({ content: pathHTML });

      page().hasXmlNamespace('http://www.w3.org/2000/svg').containsPathHTML(pathHTML).makeSnapshot();
    });
  }

  describe('when prop size is set to ', () => {
    Object.values(BsIconSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });
});
