export default {
  install(components, { strategy }) {
    // let _ignoreIsDirtyFlag = false;

    components.Model.uid = function () {
      return this.attr(() => strategy());
    };

    //   components.Model.userId = function () {
    //     return this.attr(() => this.store().getters["entities/user/userId"]);
    //   };

    //   const _saveGetFieldsMethod = components.Model.prototype.$fields;

    //   components.Model.prototype.$fields = function () {
    //     const existing = _saveGetFieldsMethod.call(this);
    //     return Object.assign({}, existing, {
    //       $syncStatus: components.Model.attr(false),
    //       $isEdited: components.Model.attr(false),
    //       updatedBy: components.Model.attr(null),
    //       createdBy: components.Model.attr(null),
    //     });
    //   };

    //   components.Query.on("beforeUpdate", function (model) {
    //     //if model is updated but not from database then is edited and not synced

    //     if (!_ignoreIsDirtyFlag) {
    //       model.$syncStatus = "notPersisted";
    //       model.$isEdited = true;
    //       // model.updatedBy = components.Model.userId();
    //     }
    //   });

    //   components.Model.persisted = async function (id) {
    //     let result = {
    //       $isEdited: false,
    //       $syncStatus: "persisted",
    //     };

    //     _ignoreIsDirtyFlag = true;
    //     await this.dispatch("update", {
    //       where: id,
    //       data: result,
    //       preventDirtyFlag: true,
    //     });
    //     _ignoreIsDirtyFlag = false;

    //     return true;
    //   };

    //   const _saveFillMethod = components.Model.prototype.$fill;

    //   // Overwrite
    //   components.Model.prototype.$fill = function (record) {
    //     _saveFillMethod.call(this, record); // Calling initial
    //     // $isDirty
    //     this.$syncStatus = (record && record.$syncStatus) || null;
    //   };
    // },
  },
};
