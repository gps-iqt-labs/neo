import Component from '../../../../src/component/Base.mjs';

/**
 * @class Portal.view.about.MemberComponent
 * @extends Neo.component.Base
 */
class MemberComponent extends Component {
    static config = {
        /**
         * @member {String} className='Portal.view.about.MemberComponent'
         * @protected
         */
        className: 'Portal.view.about.MemberComponent',
        /**
         * @member {String[]} cls=['portal-about-member-component']
         */
        cls: ['portal-about-member-component'],
        /**
         * @member {String|null} githubProfile_=null
         */
        githubProfile_: null,
        /**
         * @member {String|null} name_=null
         */
        name_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['portal-profiles'], cn: [
                {tag: 'i', cls: ['portal-github-profile', 'fa-brands', 'fa-github']},
            ]},
            {}
        ]}
    }

    /**
     * Triggered after the name config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetName(value, oldValue) {
        if (value) {
            this.vdom.cn[1].html = value;
            this.update()
        }
    }
}

Neo.setupClass(MemberComponent);

export default MemberComponent;
