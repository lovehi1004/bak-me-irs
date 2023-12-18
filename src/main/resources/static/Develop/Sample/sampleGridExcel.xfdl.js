(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleExcel");
            this.set_titletext("Excel연동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,687);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExport", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">user1</Col><Col id=\"NAME\">사용자1</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user2</Col><Col id=\"NAME\">사용자2</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user3</Col><Col id=\"NAME\">사용자3</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user4</Col><Col id=\"NAME\">사용자4</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user5</Col><Col id=\"NAME\">사용자5</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user6</Col><Col id=\"NAME\">사용자6</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user7</Col><Col id=\"NAME\">사용자7</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user8</Col><Col id=\"NAME\">사용자8</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user9</Col><Col id=\"NAME\">사용자9</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user10</Col><Col id=\"NAME\">사용자10</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user11</Col><Col id=\"NAME\">사용자11</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user12</Col><Col id=\"NAME\">사용자12</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user13</Col><Col id=\"NAME\">사용자13</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user14</Col><Col id=\"NAME\">사용자14</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user15</Col><Col id=\"NAME\">사용자15</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user16</Col><Col id=\"NAME\">사용자16</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user17</Col><Col id=\"NAME\">사용자17</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user18</Col><Col id=\"NAME\">사용자18</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user19</Col><Col id=\"NAME\">사용자19</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row><Row><Col id=\"ID\">user20</Col><Col id=\"NAME\">사용자20</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col><Col id=\"CNT\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImport", this);
            obj._setContents("<ColumnInfo><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"STRING\" size=\"256\"/><Column id=\"COL3\" type=\"STRING\" size=\"256\"/><Column id=\"COL4\" type=\"STRING\" size=\"256\"/><Column id=\"COL5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport01", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1111111</Col><Col id=\"NAME\">111111111</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user2</Col><Col id=\"NAME\">사용자2</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user3</Col><Col id=\"NAME\">사용자3</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user4</Col><Col id=\"NAME\">사용자4</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user5</Col><Col id=\"NAME\">사용자5</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user6</Col><Col id=\"NAME\">사용자6</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user7</Col><Col id=\"NAME\">사용자7</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user8</Col><Col id=\"NAME\">사용자8</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user9</Col><Col id=\"NAME\">사용자9</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user10</Col><Col id=\"NAME\">사용자10</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user11</Col><Col id=\"NAME\">사용자11</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user12</Col><Col id=\"NAME\">사용자12</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user13</Col><Col id=\"NAME\">사용자13</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user14</Col><Col id=\"NAME\">사용자14</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user15</Col><Col id=\"NAME\">사용자15</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user16</Col><Col id=\"NAME\">사용자16</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user17</Col><Col id=\"NAME\">사용자17</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user18</Col><Col id=\"NAME\">사용자18</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user19</Col><Col id=\"NAME\">사용자19</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user20</Col><Col id=\"NAME\">사용자20</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport02", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">222222222</Col><Col id=\"NAME\">2222222222</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user2</Col><Col id=\"NAME\">사용자2</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user3</Col><Col id=\"NAME\">사용자3</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user4</Col><Col id=\"NAME\">사용자4</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user5</Col><Col id=\"NAME\">사용자5</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user6</Col><Col id=\"NAME\">사용자6</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user7</Col><Col id=\"NAME\">사용자7</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user8</Col><Col id=\"NAME\">사용자8</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user9</Col><Col id=\"NAME\">사용자9</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user10</Col><Col id=\"NAME\">사용자10</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user11</Col><Col id=\"NAME\">사용자11</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user12</Col><Col id=\"NAME\">사용자12</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user13</Col><Col id=\"NAME\">사용자13</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user14</Col><Col id=\"NAME\">사용자14</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user15</Col><Col id=\"NAME\">사용자15</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user16</Col><Col id=\"NAME\">사용자16</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user17</Col><Col id=\"NAME\">사용자17</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user18</Col><Col id=\"NAME\">사용자18</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user19</Col><Col id=\"NAME\">사용자19</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user20</Col><Col id=\"NAME\">사용자20</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExport03", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">33333333</Col><Col id=\"NAME\">3333333</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user2</Col><Col id=\"NAME\">사용자2</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user3</Col><Col id=\"NAME\">사용자3</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user4</Col><Col id=\"NAME\">사용자4</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user5</Col><Col id=\"NAME\">사용자5</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user6</Col><Col id=\"NAME\">사용자6</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user7</Col><Col id=\"NAME\">사용자7</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user8</Col><Col id=\"NAME\">사용자8</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user9</Col><Col id=\"NAME\">사용자9</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user10</Col><Col id=\"NAME\">사용자10</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user11</Col><Col id=\"NAME\">사용자11</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user12</Col><Col id=\"NAME\">사용자12</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user13</Col><Col id=\"NAME\">사용자13</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user14</Col><Col id=\"NAME\">사용자14</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user15</Col><Col id=\"NAME\">사용자15</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user16</Col><Col id=\"NAME\">사용자16</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user17</Col><Col id=\"NAME\">사용자17</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user18</Col><Col id=\"NAME\">사용자18</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user19</Col><Col id=\"NAME\">사용자19</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row><Row><Col id=\"ID\">user20</Col><Col id=\"NAME\">사용자20</Col><Col id=\"DESCRIPTION\">엑셀 익스포트 임포트를 위한 데이터셋 세팅</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">SOOJEONG</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","77","178","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1) 다운로드(Export)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","429","208","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2) 업로드(Import)");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","42","766","464","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","20","466","896","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","811","77","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList00","20","108","896","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsExport");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"380\"/><Column size=\"90\"/><Column size=\"30\"/><Column size=\"103\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"35\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사용자아이디\"/><Cell col=\"1\" text=\"사용자 성명\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" colspan=\"2\" text=\"사용여부\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"카운트\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_Refresh\" calendarheadformat=\"false\"/><Cell col=\"5\" text=\"bind:REG_USER\"/><Cell col=\"6\" text=\"bind:CNT\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;CNT&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport","811","429","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiList01","944","108","496","162",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsExport01");
            obj.set_autofittype("col");
            obj.getSetter("sheetname").set("목록1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiList02","944","300","496","162",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsExport02");
            obj.set_autofittype("col");
            obj.getSetter("sheetname").set("목록2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiList03","944","498","496","162",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsExport03");
            obj.set_autofittype("col");
            obj.getSetter("sheetname").set("목록3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExportMulti","1335","72","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Multi Export");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiList04","1500","108","496","162",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsExport01");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiList05","1500","300","496","162",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsExport02");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultiList06","1500","498","496","162",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsExport03");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboType","675","77","126","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("5");
            obj.set_type("caseifilterlike");
            var cboType_innerdataset = new nexacro.NormalDataset("cboType_innerdataset", obj);
            cboType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">excel</Col><Col id=\"datacolumn\">excel</Col></Row><Row><Col id=\"datacolumn\">txt</Col><Col id=\"codecolumn\">txt</Col></Row><Row><Col id=\"codecolumn\">csv</Col><Col id=\"datacolumn\">csv</Col></Row></Rows>");
            obj.set_innerdataset(cboType_innerdataset);
            obj.set_text("");
            obj.set_value("-전체-");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","570","79","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("exportFileType");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboType2","678","429","123","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("5");
            obj.set_type("caseifilterlike");
            var cboType2_innerdataset = new nexacro.NormalDataset("cboType2_innerdataset", obj);
            cboType2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">excel</Col><Col id=\"datacolumn\">excel</Col></Row><Row><Col id=\"datacolumn\">txt</Col><Col id=\"codecolumn\">txt</Col></Row><Row><Col id=\"codecolumn\">csv</Col><Col id=\"datacolumn\">csv</Col></Row></Rows>");
            obj.set_innerdataset(cboType2_innerdataset);
            obj.set_text("excel");
            obj.set_value("-전체-");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","570","429","98","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("importFileType");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtInfo","20","5",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("Grid > Excel 다운로드(Export) / 업로드(Import)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGridExcel.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleExcel Form
        * FILE NAME     : sampleExcel.xfdl
        * DESCRIPTION   : Excel연동
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.08.22    TOBESOFT	     최초생성
        ***********************************************************************************/

        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/


        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/

        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {

        };

        /**
         * @description Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면
         *              gfnSetFormInit 를 통해 공통 초기화 작업이 수행된다.
         *              콜백함수명을 지정하여 해당 함수에서 개발자의 초기작업 코드를 기술한다.
         */
        this.form_onload = function(obj,e)
        {
        	// Load 후 초기화설정 및 Data Setting
        	this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수
         */
        this.fnFormInit = function()
        {
        // 	this.fvApp.ExcelInfo.excelImportUrl = "http://192.168.0.140:28080/nexacro-xeni-java/XExportImport";
        // 	this.fvApp.ExcelInfo.excelExportUrl = "http://192.168.0.140:28080/nexacro-xeni-java/XExportImport";
        };

        /************************************************************************************
        * 4. Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/
        //Import

        /**
         * @description Import callback(선택)
         */
        this.fnImportCallback = function(sImportId, sOutdsNm)
        {
        	trace("[fnImportCallback]sImportId : "+sImportId+" | sFileName : "+ sOutdsNm);

        	switch (sImportId)
        	{
        		case "Import" :
        			// 후처리 코드
        			this.grdList01.setBindDataset( this[sOutdsNm]);
        			this.grdList01.createFormat();
        			break;
        		default:
        			break;
        	}
        };

        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/



        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/



        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        /**
         * @description Export (엑셀 다운로드)
        */
        this.btnExport_onclick = function(obj,e)
        {
        	/*
        	//sheetname, filename , exportfiletype 은 Grid의 user property로 등록가능
        	// 혹은 script 설정
        	// this.grdList00.sheetname = "목록";
        	// this.grdList00.filename = "사용자목록";
        	// this.grdList00.exportfiletype = this.cboType.value;	// exportfiletype : excel (default), csv , txt
        	// this.gfnExcelExport(this.grdList00);
        	*/

        	// oArgs 사용시
        	// grid object : 대상 Grid
        	// sheetname : sheet명
        	// filename : Excel 파일명
        	// exportfiletype : excel , csv , txt  ,   Export 하여 생성할 파일의 형식 (string)
        	// suppress: 그리드 suppress기능을 export시에도 사용하기 위한 옵션(Y(default),N,M) Y:suppress, N:nosuppress, M:Suppress + Merge
        	// height : 그리드 Row높이를 Excel에 반영하기 위한 옵션(Y,N(default))
        	// bodystyle: 그리드 Body Cell Cssclass 를 적용할지 여부(Y(default),N)

        	var oArgs = {grid:this.grdList00
        				,sheetname : "목록"
        				,filename  : "사용자목록"
        				,exportfiletype : this.cboType.value
        				};
        	this.gfnExcelExport(oArgs);
        };

        /**
         * @description Import
         *	fromsheet null인 경우 첫번째 sheet선택 ★★
         *	frombody null인 경우 A열 2행부터 Import(시작행을 선택하는데 사용됨)  ★★
        */
        this.btnImport_onclick = function(obj,e)
        {
        	var tVal = this.cboType2.value;	// excel , txt , csv

        	var oArgs = {id:"Import"
        				,outds: "dsImport"
        				,fromsheet:"목록"
        				,frombody:"A2"
        				,callback:"fnImportCallback"
        				,objform:this
        				,importfiletype:tVal	// excel , txt , csv
        				};
         	this.gfnExcelImport(oArgs);
        };

        /**
         * @description Export Multi (엑셀 다운로드 - 멀티 Grid)
        */
        this.btnExportMulti_onclick = function(obj,e)
        {
        	// Grid UserProperty 사용할 경우
        	// grid object : 대상 Grid (Array)
        	// sheetname : sheet명 (Array) , UserProperty 사용시 "" 입력
        	// filename : Excel 파일명
        	// exportfiletype : excel , csv , txt     Export 하여 생성할 파일의 형식
        	var oArgs = {grid:[this.grdMultiList01,this.grdMultiList02,this.grdMultiList03]
        				,sheetname:""
        				,filename:"사용자목록"
        				,exportfiletype:"excel"
        				};
        	this.gfnExcelExport(oArgs);

        /*
        	// Grid UserProperty 사용하지 않을 경우
        	// grid object : 대상 Grid (Array)
        	// sheetname : sheet명 (Array)
        	// filename : Excel 파일명 (string)
        	// exportfiletype : "excel"  	// excel , csv , txt     Export 하여 생성할 파일의 형식 (string)
        	var oArgs = {grid:[this.grdMultiList04,this.grdMultiList05,this.grdMultiList06]
        				,sheetname:["sheet1","sheet2","sheet3"]
        				,filename:"excelMultiExport"
        				,exportfiletype:"excel"
        				};
        	this.gfnExcelExport(oArgs);
        */
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.btnExportMulti.addEventHandler("onclick",this.btnExportMulti_onclick,this);
        };
        this.loadIncludeScript("sampleGridExcel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
