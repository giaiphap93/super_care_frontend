<template>
  <div class="wrap">
    <div class="content">
      <div
        class="calendar_default_main"
        style="
          position: relative;
          width: 100%;
          visibility: visible;
          cursor: auto;
        "
      >
        <div style="overflow: auto">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="width: 100%; border-collapse: separate; border: 0px none"
          >
            <tbody>
              <tr>
                <td style="padding: 0px; border: 0px none">
                  <div
                    class="calendar_default_corner"
                    style="position: relative; width: 60px; height: 30px"
                  >
                    <div class="calendar_default_corner_inner"></div>
                  </div>
                </td>
                <td
                  style="
                    width: 100%;
                    position: relative;
                    padding: 0px;
                    border: 0px none;
                  "
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    width="100%"
                    style="table-layout: fixed"
                  >
                    <tbody>
                      <tr>
                        <td
                          v-for="(r, i) in resources"
                          :key="`resource-${i}`"
                          style="
                            overflow: hidden;
                            padding: 0px;
                            border: 0px none;
                            height: 30px;
                          "
                        >
                          <div
                            class="calendar_default_colheader_inner"
                            style="
                              cursor: default;
                              position: relative;
                              height: 30px;
                              white-space: nowrap;
                            "
                          >
                            {{ r }}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <!-- <td>
                  <div
                    class="calendar_default_cornerright"
                    style="position: relative; width: 17px; height: 30px"
                  >
                    <div class="calendar_default_cornerright_inner"></div>
                  </div>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
        <div class="hide-scroll" style="height: 540px; overflow: auto; position: relative; zoom: 1">
          <div style="zoom: 1; position: relative">
            <table
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="border: 0px none; width: 100%; position: absolute"
            >
              <tbody>
                <tr>
                  <td style="padding: 0px; border: 0px none">
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="border: 0px none; width: 60px"
                    >
                      <tbody>
                        <tr
                          style="height: 60px"
                          v-for="(dt, i) in dayTime"
                          :key="`day-time${i}`"
                        >
                          <td
                            style="
                              cursor: default;
                              padding: 0px;
                              border: 0px none;
                            "
                          >
                            <div
                              class="calendar_default_rowheader"
                              style="
                                position: relative;
                                width: 60px;
                                height: 60px;
                                overflow: hidden;
                              "
                            >
                              <div class="calendar_default_rowheader_inner t-center">
                                {{ i }}
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="100%" style="padding: 0px; border: 0px none">
                    <div style="position: relative">
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                          width: 100%;
                          border: 0px none;
                          table-layout: fixed;
                        "
                      >
                        <tbody>
                          <template
                            v-for="(dt, k) in dayTime"
                            :key="`day-time-key${k}`"
                          >
                            <tr
                              v-for="(dtv, _k) in dt"
                              :key="`day-time-key${_k}${dtv}`"
                            >
                              <td
                                v-for="(r, i) in resources"
                                :key="`r-key-${i}`"
                                style="
                                  padding: 0px;
                                  border: 0px none;
                                  vertical-align: top;
                                  height: 30px;
                                  overflow: hidden;
                                "
                              >
                                <div
                                  class="calendar_default_cell"
                                  style="height: 30px; position: relative"
                                >
                                  <div
                                    unselectable="on"
                                    class="calendar_default_cell_inner"
                                  ></div>
                                </div>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resources: [
        "Resource 1",
        "Resource 2",
        "Resource 3",
        "Resource 4",
        "Resource 5",
        "Resource 6",
        "Resource 7",
        "Resource 8",
        "Resource 9",
        "Resource 10",
      ],
      dayTime: {
        "00:00": [30, 60],
        "01:00": [30, 60],
        "02:00": [30, 60],
        "03:00": [30, 60],
        "04:00": [30, 60],
        "05:00": [30, 60],
        "06:00": [30, 60],
        "07:00": [30, 60],
        "08:00": [30, 60],
        "09:00": [30, 60],
        "10:00": [30, 60],
        "11:00": [30, 60],
        "12:00": [30, 60],
        "13:00": [30, 60],
        "14:00": [30, 60],
        "15:00": [30, 60],
        "16:00": [30, 60],
        "17:00": [30, 60],
        "18:00": [30, 60],
        "19:00": [30, 60],
        "20:00": [30, 60],
        "21:00": [30, 60],
        "22:00": [30, 60],
        "23:00": [30, 60],
      },
    };
  },
};
</script>
<style scoped>
.wrap {
  display: flex;
}

.content {
  flex-grow: 1;
}

.calendar_default_main {
  border: 1px solid rgb(192, 192, 192);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 13px;
}
.calendar_default_main *,
.calendar_default_main ::before,
.calendar_default_main ::after {
  box-sizing: content-box !important;
}

.calendar_default_corner_inner {
  position: absolute;
  inset: 0px;
  border-right: 1px solid rgb(192, 192, 192);
  border-bottom: 1px solid rgb(192, 192, 192);
}

.calendar_default_rowheader_inner,
.calendar_default_cornerright_inner,
.calendar_default_corner_inner,
.calendar_default_colheader_inner,
.calendar_default_alldayheader_inner {
  color: rgb(51, 51, 51);
  /* background: rgb(243, 243, 243); */
  background: #fff;
}

.calendar_default_rowheader_inner {
  font-size: 16pt;
  text-align: right;
  position: absolute;
  inset: 0px;
  border-right: 1px solid rgb(192, 192, 192);
  border-bottom: 1px solid rgb(192, 192, 192);
  padding: 3px;
}

.calendar_default_colheader_inner {
  position: absolute;
  inset: 0px;
  border-right: 1px solid rgb(192, 192, 192);
  border-bottom: 1px solid rgb(192, 192, 192);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.calendar_default_rowheader_minutes {
  font-size: 10px;
  vertical-align: super;
  padding-left: 2px;
  padding-right: 2px;
}

.calendar_default_cell_inner {
  position: absolute;
  inset: 0px;
  border-right: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  /* background: rgb(249, 249, 249); */
  background: #fff;
}
.calendar_default_cell_inner:hover{
  background: #1677ff;
  opacity: .1;
}
.calendar_default_cornerright_inner {
  position: absolute;
  inset: 0px;
  border-bottom: 1px solid rgb(192, 192, 192);
}

.hide-scroll::-webkit-scrollbar{
    display: none;
  }
</style>