import {
    Form,
    Select,
    InputNumber,
    Switch,
    Button,
  } from 'antd'
  
  const FormItem = Form.Item
  const Option = Select.Option
  
  export default () => (
    <div style={{ marginTop: 100 }}>
      <Form layout="horizontal">
        <FormItem
          label="Input Number"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber
            size="large"
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name="inputNumber"
          />
          <a href="#">Link</a>
        </FormItem>
  
        <FormItem label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Switch defaultChecked name="switch" />
        </FormItem>
  
        <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Select
            size="large"
            defaultValue="lucy"
            style={{ width: 192 }}
            name="select"
          >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>
              disabled
            </Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>
  
      </Form>
    </div>
  )